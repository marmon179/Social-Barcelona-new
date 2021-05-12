import {authAPI} from '../api/api';
import {stopSubmit} from 'redux-form';
import {AppThunk} from './redux-store';

export type InitialStateTypeAuth = {
    userId: string | null
    email: null
    login: null
    isAuth: boolean
}

export type AuthActionType =
    ReturnType<typeof setAuthUserDataAC>


const initialState: InitialStateTypeAuth = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state: InitialStateTypeAuth = initialState, action: AuthActionType): InitialStateTypeAuth => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export const setAuthUserDataAC = (userID: null, email: null, login: null, isAuth: boolean) => ({
    type: 'SET-USER-DATA',
    payload: {userID, email, login, isAuth}
} as const)

export const getAuthUserData = (): AppThunk => (dispatch) => authAPI.me()
    .then(response => {
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data
            dispatch(setAuthUserDataAC(id, email, login, true))
        }
    })


export const login = (email: string, password: number, rememberMe: boolean): AppThunk => dispatch => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: message})as AuthActionType)
            }
        })
}

export const logout = (): AppThunk => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserDataAC(null, null, null, false))
            }
        })
}

export default authReducer
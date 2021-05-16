import {AppThunk} from './redux-store';
import {getAuthUserData} from './auth-reducer';


const initialState = {
    initialized: false
}

export const appReducer = (state: InitialStateTypeApp = initialState, action: AppReducerActionType): InitialStateTypeApp => {
    switch (action.type) {
        case 'INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}
//actions
export const initializedSuccess = () => ({
    type: 'INITIALIZED_SUCCESS',
} as const)

//thunks
export const initializeApp = (): AppThunk => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}
//types
export type InitialStateTypeApp = typeof initialState
export type AppReducerActionType = ReturnType<typeof initializedSuccess>

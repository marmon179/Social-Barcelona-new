import {profileAPI, usersAPI} from '../api/api';
import {AppThunk} from './redux-store';


export type InitialStateTypeProfile = typeof initialState

type MessageType = {
    message: string
    id: number
}

export type ProfileActionsTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof setStatus>

const initialState = {
    dialogsData: [
        {id: 1, message: 'Hello people!!!!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Very nice!!!'},
    ] as Array<MessageType>,
    profile: null,
    status: ''

}

const profileReducer = (state: InitialStateTypeProfile = initialState, action: ProfileActionsTypes): InitialStateTypeProfile => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: MessageType = {
                id: 4,
                message: action.newMessageBody
            };
            return {
                ...state,
                dialogsData: [...state.dialogsData, newPost],
            }
        case 'SET-STATUS':
            return {
                ...state,
                status: action.status
            }
        case 'SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}

export const addPostAC = (newMessageBody: string) => ({type: 'ADD-POST', newMessageBody} as const)
export const setUserProfile = (profile: null) => ({type: 'SET_USER_PROFILE', profile} as const)
export const setStatus = (status: string) => ({type: 'SET-STATUS', status} as const)

export const getUserProfile = (userId: number):AppThunk => (dispatch) => {
    usersAPI.getUserProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        })
}

export const getStatus = (userId: number):AppThunk => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        })
}
export const updateStatus = (status: string):AppThunk => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}

export default profileReducer
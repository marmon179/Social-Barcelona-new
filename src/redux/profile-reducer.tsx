import {profileAPI, usersAPI} from '../api/api';
import {AppThunk} from './redux-store';


const initialState = {
    dialogsData: [
        {id: 1, message: 'Hello people!!!!'},
    ],
    profile: null,
    status: ''
}

export const profileReducer = (state: InitialStateTypeProfile = initialState, action: ProfileActionsTypes): InitialStateTypeProfile => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {
                id: 2,
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
//actions
export const addPost = (newMessageBody: string) => ({type: 'ADD-POST', newMessageBody} as const)
export const setUserProfile = (profile: null) => ({type: 'SET_USER_PROFILE', profile} as const)
export const setStatus = (status: string) => ({type: 'SET-STATUS', status} as const)
//thunks
export const getUserProfile = (userId: string): AppThunk => (dispatch) => {
    usersAPI.getUserProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        })
}
export const getStatusTC = (userId: string): AppThunk => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        })
}
export const updateStatus = (status: string): AppThunk => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}
//types
export type InitialStateTypeProfile = typeof initialState
export type ProfileActionsTypes =
    ReturnType<typeof addPost> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof setStatus>
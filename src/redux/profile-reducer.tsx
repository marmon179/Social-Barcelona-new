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
        case 'PROFILE/ADD-POST':
            const newPost = {
                id: 2,
                message: action.newMessageBody
            };
            return {
                ...state,
                dialogsData: [...state.dialogsData, newPost],
            }
        case 'PROFILE/SET-STATUS':
            return {
                ...state,
                status: action.status
            }
        case 'PROFILE/SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}
//actions
export const addPost = (newMessageBody: string) => ({type: 'PROFILE/ADD-POST', newMessageBody} as const)
export const setUserProfile = (profile: null) => ({type: 'PROFILE/SET_USER_PROFILE', profile} as const)
export const setStatus = (status: string) => ({type: 'PROFILE/SET-STATUS', status} as const)
//thunks
export const getUserProfile = (userId: string): AppThunk => async (dispatch) => {
    let response = await usersAPI.getUserProfile(userId)
    dispatch(setUserProfile(response.data));
}
export const getStatusTC = (userId: string): AppThunk => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}
export const updateStatus = (status: string): AppThunk => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
//types
export type InitialStateTypeProfile = typeof initialState
export type ProfileActionsTypes =
    ReturnType<typeof addPost> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof setStatus>
import {ActionsTypes} from './state/store';
import {profileAPI, usersAPI} from '../api/api';
import {Dispatch} from 'redux';


export type InitialStateTypeProfile = typeof initialState

type MessageType = {
    message: string
    id: number
}

const initialState = {
    dialogsData: [
        {id: 1, message: 'Hello people!!!!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Very nice!!!'},
    ] as Array<MessageType>,
    messageForNewPost: '',
    profile: null,
    status: ''

}

const profileReducer = (state: InitialStateTypeProfile = initialState, action: ActionsTypes): InitialStateTypeProfile => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: MessageType = {
                id: 4,
                message: state.messageForNewPost
            };
            return {
                ...state,
                dialogsData: [...state.dialogsData, newPost],
                messageForNewPost: ''
            }
        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                messageForNewPost: action.newText
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

export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const setUserProfile = (profile: null) => ({type: 'SET_USER_PROFILE', profile} as const)
export const setStatus = (status: string) => ({type: 'SET-STATUS', status} as const)
export const UpdateNewPostTextAction = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: newText} as const)

export const getUserProfile = (userId: any) => (dispatch: any) => {
    usersAPI.getUserProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        })
}

export const getStatus = (userId: any) => (dispatch:Dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        })
}
export const updateStatus = (status: any) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}


export default profileReducer
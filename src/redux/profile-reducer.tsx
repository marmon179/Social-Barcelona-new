import {ActionsTypes} from './state/store';
import {usersAPI} from '../api/api';


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
    profile: null

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
export const getUserProfile = (userId: any) => (dispatch: any) => {
    usersAPI.getUserProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        })
}
export const UpdateNewPostTextAction = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: newText} as const)

export default profileReducer
import {ActionsTypes} from './state/store';

type ProfilePageType = {
    dialogsData: Array<MessageType>
    messageForNewPost: string

}
type MessageType = {
    message: string
    id: number
}

const initialState = {
    dialogsData: [
        {id: 1, message: 'Hello people!!!!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Very nice!!!'},
    ],
    messageForNewPost: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: MessageType = {
                id: 4,
                message: state.messageForNewPost
            }
            state.dialogsData.push(newPost)
            state.messageForNewPost = ''
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.messageForNewPost = action.newText
            return state
        default:
            return state
    }

}

export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const UpdateNewPostTextAction = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: newText} as const)

export default profileReducer
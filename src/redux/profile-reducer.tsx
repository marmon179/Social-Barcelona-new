import {ActionsTypes} from './state/store';

export type InitialStateTypeProfile = {
    dialogsData: Array<MessageType>
    messageForNewPost: string

}
type MessageType = {
    message: string
    id: number
}

const initialState: InitialStateTypeProfile = {
    dialogsData: [
        {id: 1, message: 'Hello people!!!!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Very nice!!!'},
    ],
    messageForNewPost: ''
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
        default:
            return state
    }

}

export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const UpdateNewPostTextAction = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: newText} as const)

export default profileReducer
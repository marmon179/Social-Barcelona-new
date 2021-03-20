import {ActionsTypes} from './state/store';

type MessageType = {
    message: string
    id: number
}
type DialogsType = {
    name: string,
    id: number,
}
export type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    messageForNewPostDialog: string
}

const initialState = {
    dialogs: [
        {id: 1, name: 'Sascha'},
        {id: 2, name: 'Maksim'},
        {id: 3, name: 'Katia'},
    ],
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Hi!'},
        {id: 3, message: 'hello'},
    ],
    messageForNewPostDialog: '',
}

const dialogsReducer = (state: DialogPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD_POST_DIALOG':
            const newPost: MessageType = {
                id: 4,
                message: state.messageForNewPostDialog
            }
            state.messages.push(newPost)
            state.messageForNewPostDialog = ''
            return state
        case 'UPDATE_NEW_POST_TEXT_DIALOG':
            state.messageForNewPostDialog = action.newText
            return state
        default:
            return state
    }
}

export const addPostDialogAC = () => ({type: 'ADD_POST_DIALOG'} as const)
export const UpdateNewPostTextDialogAction = (newText: string) => ({
    type: 'UPDATE_NEW_POST_TEXT_DIALOG',
    newText: newText
} as const)

export default dialogsReducer
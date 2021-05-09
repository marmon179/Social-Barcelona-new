import {ActionsTypes} from './state/store';

type MessageType = {
    message: string
    id: number
}
type DialogsType = {
    name: string,
    id: number,
}
export type InitialStateTypeDialogs = typeof initialState


const initialState = {
    dialogs: [
        {id: 1, name: 'Sascha'},
        {id: 2, name: 'Maksim'},
        {id: 3, name: 'Katia'},
    ] as Array<DialogsType>,
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Hi!'},
        {id: 3, message: 'hello'},
    ] as Array<MessageType>,
    newMessageBody: '',

}

const dialogsReducer = (state: InitialStateTypeDialogs = initialState, action: ActionsTypes): InitialStateTypeDialogs => {
    switch (action.type) {
        case 'ADD_POST_DIALOG':
            const newPost: MessageType = {
                id: 4,
                message: action.newMessageBody
            };
            return {
                ...state,
                messages: [...state.messages, newPost],
                newMessageBody: ''
            }

        case 'UPDATE_NEW_POST_TEXT_DIALOG':
            return {
                ...state,
                newMessageBody: action.newText
            }
        default:
            return state
    }

}

export const addPostDialogAC = (newMessageBody: any) => ({type: 'ADD_POST_DIALOG', newMessageBody} as const)
export const UpdateNewPostTextDialogAction = (newText: string) => ({
    type: 'UPDATE_NEW_POST_TEXT_DIALOG',
    newText: newText
} as const)

export default dialogsReducer
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
            }
    }
    return state

}

export const addPostDialogAC = (newMessageBody: any) => ({type: 'ADD_POST_DIALOG', newMessageBody} as const)

export default dialogsReducer
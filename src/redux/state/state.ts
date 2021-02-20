export type RootStateType = {
    dialogsPage: DialogPageType
    profilePage: ProfilePageType
}
export type ProfilePageType = {
    dialogsData: Array<MessageType>
}
export type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}
export type MessageType = {
    message: string
    id: number
}
export type DialogsType = {
    name: string,
    id: number,
}

export let state: RootStateType = {
    profilePage: {
        dialogsData: [
            {id: 1, message: 'Hello people!!!!'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Very nice!!!'},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Sascha'},
            {id: 2, name: 'Maksim'},
            {id: 3, name: 'Katia'},
        ],
        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'Hi!'},
            {id: 3, message: 'hello'},
        ]
    }
}
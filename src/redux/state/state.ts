type RootStateType = {
    dialogsPage: DialogPageType
    profilePage: ProfilePageType
}
type ProfilePageType = {
    dialogsData: Array<MessageType>

}
type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}
type MessageType = {
    message: string
    id: number
}
type DialogsType = {
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

export const addPost = (postMessage: string) => {
    const newPost: MessageType = {
        id: 4,
        message: postMessage
    }
    state.profilePage.dialogsData.push(newPost)
}
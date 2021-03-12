// let onChange = () => {
//     console.log('State changed')
// }


export type RootStateType = {
    dialogsPage: DialogPageType
    profilePage: ProfilePageType
}
type ProfilePageType = {
    dialogsData: Array<MessageType>
    messageForNewPost: string

}
type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    messageForNewPostDialog: string
}
type MessageType = {
    message: string
    id: number
}
type DialogsType = {
    name: string,
    id: number,
}
export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _onChange: () => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
    addPostDialog: () => void
    updateNewPostTextDialogs: (newText: string) => void
    subscribe: (callback: () => void) => void

}
export const store: StoreType = {
    _state: {
        profilePage: {
            dialogsData: [
                {id: 1, message: 'Hello people!!!!'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Very nice!!!'},
            ],
            messageForNewPost: ''
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
            ],
            messageForNewPostDialog: '',
        }
    },
    getState() {
        return this._state
    },
    _onChange() {
        console.log('State changed')
    },
    addPost() {
        const newPost: MessageType = {
            id: 4,
            message: this._state.profilePage.messageForNewPost
        }
        this._state.profilePage.dialogsData.push(newPost)
        this._state.profilePage.messageForNewPost = ''
        this._onChange()
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.messageForNewPost = newText
        this._onChange()
    },
    addPostDialog() {
        const newPost: MessageType = {
            id: 4,
            message: this._state.dialogsPage.messageForNewPostDialog
        }
        this._state.dialogsPage.messages.push(newPost)
        this._state.dialogsPage.messageForNewPostDialog = ''
        this._onChange()
    },
    updateNewPostTextDialogs(newText: string) {
        this._state.dialogsPage.messageForNewPostDialog = newText
        this._onChange()
    },
    subscribe(callback) {
        this._onChange = callback
    }
}
// export const state: RootStateType = {
//     profilePage: {
//         dialogsData: [
//             {id: 1, message: 'Hello people!!!!'},
//             {id: 2, message: 'How are you?'},
//             {id: 3, message: 'Very nice!!!'},
//         ],
//         messageForNewPost: ''
//     },
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: 'Sascha'},
//             {id: 2, name: 'Maksim'},
//             {id: 3, name: 'Katia'},
//         ],
//         messages: [
//             {id: 1, message: 'Hello'},
//             {id: 2, message: 'Hi!'},
//             {id: 3, message: 'hello'},
//         ],
//         messageForNewPostDialog: '',
//     }
// }

// export const addPost = () => {
//     const newPost: MessageType = {
//         id: 4,
//         message: state.profilePage.messageForNewPost
//     }
//     state.profilePage.dialogsData.push(newPost)
//     state.profilePage.messageForNewPost = ''
//     onChange()
// }

// export const updateNewPostText = (newText: string) => {
//     state.profilePage.messageForNewPost = newText
//     onChange()
// }

// export const addPostDialog = () => {
//     const newPost: MessageType = {
//         id: 4,
//         message: state.dialogsPage.messageForNewPostDialog
//     }
//     state.dialogsPage.messages.push(newPost)
//     state.dialogsPage.messageForNewPostDialog = ''
//     onChange()
// }

// export const updateNewPostTextDialogs = (newText: string) => {
//     state.dialogsPage.messageForNewPostDialog = newText
//     onChange()
// }

// export const subscribe = (callback: () => void) => {
//     onChange = callback
// }
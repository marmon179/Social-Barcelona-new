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
    addPostDialog: () => void
    updateNewPostTextDialogs: (newText: string) => void
    subscribe: (callback: () => void) => void
    dispatch: (action: ActionsTypes) => void

}

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof UpdateNewPostTextAction>

export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const UpdateNewPostTextAction = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: newText} as const)

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
    _onChange() {
        console.log('State changed')
    },

    getState() {
        return this._state
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
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: MessageType = {
                id: 4,
                message: this._state.profilePage.messageForNewPost
            }
            this._state.profilePage.dialogsData.push(newPost)
            this._state.profilePage.messageForNewPost = ''
            this._onChange()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.messageForNewPost = action.newText
            this._onChange()
        }

    }
}




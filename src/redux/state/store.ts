import profileReducer, {addPostAC, UpdateNewPostTextAction} from '../profile-reducer';
import dialogsReducer, {addPostDialogAC, UpdateNewPostTextDialogAction} from '../dialogs-reducer';

export type RootStateType = {
    dialogsPage: DialogPageType
    profilePage: ProfilePageType
}
export type ProfilePageType = {
    dialogsData: Array<MessageType>
    messageForNewPost: string

}
export type DialogPageType = {
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
    subscribe: (callback: () => void) => void
    dispatch: (action: ActionsTypes) => void

}

export type ActionsTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof UpdateNewPostTextAction> |
    ReturnType<typeof addPostDialogAC> |
    ReturnType<typeof UpdateNewPostTextDialogAction>


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

    subscribe(callback) {
        this._onChange = callback
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._onChange()
    }
}




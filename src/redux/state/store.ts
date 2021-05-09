import profileReducer, {
    addPostAC,
    setStatus,
    setUserProfile,
} from '../profile-reducer';
import dialogsReducer, {addPostDialogAC} from '../dialogs-reducer';

export type RootStateType = {
    dialogsPage: DialogPageType
    profilePage: ProfilePageType
}
export type ProfilePageType = {
    dialogsData: Array<MessageType>
    profile: null
    status: string


}
export type DialogPageType = {
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
export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _onChange: () => void
    subscribe: (callback: () => void) => void
    dispatch: (action: ActionsTypes) => void

}

export type ActionsTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof addPostDialogAC> |
    ReturnType<typeof setStatus>


export const store: StoreType = {
    _state: {
        profilePage: {
            dialogsData: [
                {id: 1, message: 'Hello people!!!!'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Very nice!!!'},
            ],
            profile: null,
            status: ''
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




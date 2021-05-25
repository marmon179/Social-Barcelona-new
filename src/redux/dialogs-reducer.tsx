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
    ]

}

export const dialogsReducer = (state: InitialStateTypeDialogs = initialState, action: DialogsActionsTypes): InitialStateTypeDialogs => {
    switch (action.type) {
        case 'DIALOGS/ADD_POST_DIALOG':
            const newPost = {
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
//actions
export const addPostDialogAC = (newMessageBody: string) => ({type: 'DIALOGS/ADD_POST_DIALOG', newMessageBody} as const)
//types
export type DialogsActionsTypes = ReturnType<typeof addPostDialogAC>
export type InitialStateTypeDialogs = typeof initialState



type MessageType = {
    message: string
    id: number
}

const profileReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: MessageType = {
                id: 4,
                message: state.messageForNewPost
            }
            state.dialogsData.push(newPost)
            state.messageForNewPost = ''
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.messageForNewPost = action.newText
            return state
        default:
            return state
    }

}

export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const UpdateNewPostTextAction = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: newText} as const)

export default profileReducer
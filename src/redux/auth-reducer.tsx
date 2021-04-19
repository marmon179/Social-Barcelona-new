export type InitialStateTypeAuth = {
    userId: null
    email: null
    login: null
    isAuth: boolean

}

type DataPropsType = {
    userId: null
    email: null
    login: null

}

type ActionsTypes = {
    type: string
    data: DataPropsType

}

const initialState: InitialStateTypeAuth = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state: InitialStateTypeAuth = initialState, action: ActionsTypes): InitialStateTypeAuth => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserDataAC = (userID: number, email: string, login: string) => ({
    type: 'SET-USER-DATA',
    data: {userID, email, login}
} as const)

export default authReducer
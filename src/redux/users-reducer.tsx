export type InitialStateTypeUser = {
    users: Array<UserType>
}
export type UserType = {
    id: string
    photo: string
    fullName: string
    followed: boolean
    status: string
    location: LocationType
}
type LocationType = {
    city: string
    country: string
}

type ActionsTypes = {
    type: string
    userID: string
    users: any
}

const initialState: InitialStateTypeUser = {
    users: [],
}

const usersReducer = (state: InitialStateTypeUser = initialState, action: ActionsTypes): InitialStateTypeUser => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case 'UNFOLLOW':
            return {
                users: state.users.map((u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                }))
            }
        case 'SET_USERS':
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }

}

export const followAC = (userID: string) => ({type: 'FOLLOW', userID} as const)
export const unfollowACC = (userID: string) => ({type: 'UNFOLLOW', userID} as const)
export const setUserAC = (users: Array<UserType>) => ({type: 'SET_USERS', users} as const)

export default usersReducer
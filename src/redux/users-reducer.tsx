export type InitialStateTypeUser = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: boolean

}

export type UserType = {
    id: string
    photos: any
    name: string
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
    users: UserType[]
    currentPage: number
    count: number
    isFetching: boolean

}

const initialState: InitialStateTypeUser = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: false
}

const usersReducer = (state: InitialStateTypeUser = initialState, action: ActionsTypes): InitialStateTypeUser => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map((u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                }))
            }
        case 'SET_USERS':
            return {...state, users: action.users}
        case 'SET_CURRENT_PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET_TOTAL_USERS_COUNT': {
            return {...state, totalUsersCount: action.count}
        }
        case 'TOGGLE_IS_FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        case 'TOGGLE_IS_FOLLOWING_PROGRESS': {
            return {
            ...state, followingInProgress: action.isFetching
            }
        }
        default:
            return state;
    }

}

export const follow = (userID: string) => ({type: 'FOLLOW', userID} as const)
export const unfollow = (userID: string) => ({type: 'UNFOLLOW', userID} as const)
export const setUser = (users: Array<UserType>) => ({type: 'SET_USERS', users} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: 'SET_TOTAL_USERS_COUNT',
    count: totalUsersCount
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({
    type: 'TOGGLE_IS_FETCHING',
    isFetching
} as const)
export const toggleFollowingProgress = (isFetching: boolean) => ({
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
    isFetching,
} as const)

export default usersReducer
export type InitialStateTypeUser = {
    users: Array<UserType>
    pageSize?: any
    totalUsersCount?:any
    currentPage?:any

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
    users: any
    currentPage:any
    count:any
}

const initialState: InitialStateTypeUser = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage:1
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
            return {...state, users:action.users}
        case 'SET_CURRENT_PAGE': {
            return {...state,currentPage:action.currentPage}
        }
        case 'SET_TOTAL_USERS_COUNT': {
            return {...state,totalUsersCount: action.count}
        }
        default:
            return state;
    }

}

export const followAC = (userID: string) => ({type: 'FOLLOW', userID} as const)
export const unfollowACC = (userID: string) => ({type: 'UNFOLLOW', userID} as const)
export const setUserAC = (users: Array<UserType>) => ({type: 'SET_USERS', users} as const)
export const setCurrentPageAC = (currentPage:any) => ({type: 'SET_CURRENT_PAGE', currentPage} as const)
export const setTotalUsersCountAC = (totalUsersCount:any) => ({type: 'SET_TOTAL_USERS_COUNT', count: totalUsersCount} as const)

export default usersReducer
import {usersAPI} from '../api/api';
import {AppThunk} from './redux-store';
import {Dispatch} from 'redux';
import {updateObjectInArray} from '../utils/object-helpers';


const initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}


export const usersReducer = (state: InitialStateTypeUser = initialState, action: UserActionType): InitialStateTypeUser => {
    switch (action.type) {
        case 'USERS/FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', {followed: true})
            }
        case 'USERS/UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', {followed: false})
            }
        case 'USERS/SET_USERS':
            return {...state, users: action.users}
        case 'USERS/SET_CURRENT_PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'USERS/SET_TOTAL_USERS_COUNT': {
            return {...state, totalUsersCount: action.count}
        }
        case 'USERS/TOGGLE_IS_FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        case 'USERS/TOGGLE_IS_FOLLOWING_PROGRESS': {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter((id: string) => id != action.userID)
            } as InitialStateTypeUser
        }
        default:
            return state;
    }

}
//actions
export const followSuccess = (userID: string) => ({type: 'USERS/FOLLOW', userID} as const)
export const unfollowSuccess = (userID: string) => ({type: 'USERS/UNFOLLOW', userID} as const)
export const setUser = (users: Array<UserType>) => ({type: 'USERS/SET_USERS', users} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'USERS/SET_CURRENT_PAGE', currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: 'USERS/SET_TOTAL_USERS_COUNT',
    count: totalUsersCount
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({
    type: 'USERS/TOGGLE_IS_FETCHING',
    isFetching
} as const)
export const toggleFollowingProgress = (isFetching: boolean, userID: string | number) => ({
    type: 'USERS/TOGGLE_IS_FOLLOWING_PROGRESS',
    isFetching,
    userID
} as const)
//thunks
export const requestUsers = (page: number, pageSize: number): AppThunk => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let data = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setCurrentPage(page))
    dispatch(setUser(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}
const followUnfollowFlow = async (dispatch: Dispatch, userId: string, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId)

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId: number & string): AppThunk => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, await usersAPI.follow.bind(usersAPI), followSuccess)
    }
}
export const unfollow = (userId: number & string): AppThunk => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, await usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
    }
}

//types
export type InitialStateTypeUser = typeof initialState
export type UserType = {
    id: string
    photos: string
    name: string
    followed: boolean
    status: string
    location: {
        city: string
        country: string
    }
}
export type UserActionType =
    ReturnType<typeof followSuccess> |
    ReturnType<typeof unfollowSuccess> |
    ReturnType<typeof setUser> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof toggleIsFetching> |
    ReturnType<typeof toggleFollowingProgress>


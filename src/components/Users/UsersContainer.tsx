import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {
    followAC,
    InitialStateTypeUser,
    setCurrentPageAC, setTotalUsersCountAC,
    setUserAC,
    unfollowACC,
    UserType
} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';

type MapStatePropsType = {
    users: InitialStateTypeUser
    pageSize: any
    totalUsersCount: any
    currentPage:any
}

type MapDispatchPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage:(pageNumber:any) => void
    setTotalUsersCount:(totalCount:any) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.userPage,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowACC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUserAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)




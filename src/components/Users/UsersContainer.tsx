import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {followAC, InitialStateTypeUser, setUserAC, unfollowACC, UserType} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';

type MapStatePropsType = {
    users: InitialStateTypeUser
}

type MapDispatchPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.userPage
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
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)




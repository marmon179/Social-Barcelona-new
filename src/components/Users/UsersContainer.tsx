import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    getUsers,
    InitialStateTypeUser,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow
} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Users} from './Users';
import Preloader from '../common/Preloader/Preloader';

type MapStatePropsType = {
    users: InitialStateTypeUser
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: any
}

type MapDispatchPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setCurrentPage: (pageNumber: number) => void
    toggleFollowingProgress: (isFetching: boolean, id: any) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: any) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}

            />
        </>
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.userPage,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching,
        followingInProgress: state.userPage.followingInProgress

    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
})(UsersContainer)




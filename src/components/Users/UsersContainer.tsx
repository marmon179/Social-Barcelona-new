import React, {ComponentType} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {
    followSuccess, getUsers, InitialStateTypeUser, setCurrentPage,
    toggleFollowingProgress, unfollowSuccess
} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Users} from './Users';
import Preloader from '../common/Preloader/Preloader';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props}
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
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching,
        followingInProgress: state.userPage.followingInProgress

    }
}
const connector = connect(mapStateToProps, {
    follow: followSuccess, unfollow: unfollowSuccess,
    setCurrentPage, toggleFollowingProgress, getUsers
})
export default compose<ComponentType>(withAuthRedirect, connector)(UsersContainer)
//types
type MapStatePropsType = InitialStateTypeUser
export type UsersPropsType = ConnectedProps<typeof connector>





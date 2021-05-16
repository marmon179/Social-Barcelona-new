import React, {ComponentType} from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {getStatus, getUserProfile, updateStatus} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {MessageType} from './Posts/Post/Post';

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId as string
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        if (userId != null) {
            this.props.getUserProfile(userId);
        }
        if (userId != null) {
            this.props.getStatus(userId)
        }
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

const connector = connect(mapStateToProps, {getUserProfile, getStatus, updateStatus})
export default compose<ComponentType>(connector, withRouter, withAuthRedirect)(ProfileContainer)
//types
export type ProfilePageType = {
    dialogsData: Array<MessageType>
    profile: null
    status: string
}
type PathParamsType = {
    userId: string
}
type MapStatePropsType = {
    profile: ProfilePageType | null
    status: string
    authorizedUserId: string | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}
type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType


import React, {ComponentType} from 'react';
import {Profile} from './Profile';
import {connect, ConnectedProps} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {getStatusTC, getUserProfile, updateStatus} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {getProfile, getStatus} from '../../redux/profile-selectors';
import {getAuthorizedUserId, getIsAuth} from '../../redux/auth-selectors';

class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId as string
            // if (!userId) {
            //     this.props.history.push('/login')
            // }
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

const mapStateToProps = (state: AppStateType) => ({
    profile: getProfile(state),
    status: getStatus(state),
    authorizedUserId: getAuthorizedUserId(state),
    isAuth: getIsAuth(state)
})

const connector = connect(mapStateToProps, {getUserProfile, getStatus: getStatusTC, updateStatus})
export default compose<ComponentType>(connector, withRouter, withAuthRedirect)(ProfileContainer)
//types
export type PropsType = ConnectedProps<typeof connector>
type PathParamsType = {
    userId: string
}
type ProfilePropsType = RouteComponentProps<PathParamsType> & PropsType


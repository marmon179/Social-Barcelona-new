import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {getUserProfile} from '../../redux/profile-reducer';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {ProfilePageType} from '../../redux/state/store';


type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfilePageType | null
}

type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default withAuthRedirect(connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent));
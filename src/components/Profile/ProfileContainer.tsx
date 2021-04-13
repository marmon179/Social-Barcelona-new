import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {setUserProfile} from '../../redux/profile-reducer';


type MapStatePropsType = {
    profile:any
}

type MapDispatchPropsType = {
    setUserProfile: (profile: null) => void
}

type PropsType =MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data.items);
        })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}  />
        )
    }
}

const mapStateToProps = (state: AppStateType):MapStatePropsType => ({
    profile: state.profilePage.profile
})

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {setUserProfile})(ProfileContainer);
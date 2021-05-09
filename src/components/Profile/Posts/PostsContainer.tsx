import React from 'react';
import Posts from './Posts';
import {addPostAC, InitialStateTypeProfile} from '../../../redux/profile-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';

type MapStatePropsType = InitialStateTypeProfile

const mapStateProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsData: state.profilePage.dialogsData,
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (newMessageBody: string) => {
            dispatch(addPostAC(newMessageBody))
        },
    }
}
export const PostsContainer = connect(mapStateProps, mapDispatchToProps)(Posts)

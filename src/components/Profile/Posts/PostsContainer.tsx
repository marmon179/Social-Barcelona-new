import React, {ChangeEvent} from 'react';
import Posts from './Posts';
import {addPostAC, InitialStateTypeProfile, UpdateNewPostTextAction} from '../../../redux/profile-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';

type MapStatePropsType = InitialStateTypeProfile

const mapStateProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsData: state.profilePage.dialogsData,
        messageForNewPost: state.profilePage.messageForNewPost,
        profile: state.profilePage.profile,
        status: state.profilePage.status

    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        onPostChange: (e: ChangeEvent<HTMLTextAreaElement>) => {
            const text = e.currentTarget.value
            dispatch(UpdateNewPostTextAction(text))
        }
    }
}
export const PostsContainer = connect(mapStateProps, mapDispatchToProps)(Posts)

import React from 'react';
import {Posts} from './Posts';
import {addPost} from '../../../redux/profile-reducer';
import {connect, ConnectedProps} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';


const mapStateProps = (state: AppStateType) => {
    return {
        dialogsData: state.profilePage.dialogsData,
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (newMessageBody: string) => {
            dispatch(addPost(newMessageBody))
        },
    }
}
const connector = connect(mapStateProps, mapDispatchToProps)
export const PostsContainer = connector(Posts)
//types
export type PostsPropsType = ConnectedProps<typeof connector>


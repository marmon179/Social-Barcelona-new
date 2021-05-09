import React, {ChangeEvent} from 'react';
import {addPostDialogAC, InitialStateTypeDialogs, UpdateNewPostTextDialogAction} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

type MapStatePropsType = InitialStateTypeDialogs

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onPostChange: (e: ChangeEvent<HTMLTextAreaElement>) => {
            const text = e.currentTarget.value
            dispatch(UpdateNewPostTextDialogAction(text))
        },
        addPost: (newMessageBody:any) => {
            dispatch(addPostDialogAC(newMessageBody))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)


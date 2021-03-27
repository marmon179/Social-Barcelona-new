import React, {ChangeEvent} from 'react';
import {addPostDialogAC, InitialStateTypeDialogs, UpdateNewPostTextDialogAction} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';

type MapStatePropsType = InitialStateTypeDialogs

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        messageForNewPostDialog: state.dialogsPage.messageForNewPostDialog
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onPostChange: (e: ChangeEvent<HTMLTextAreaElement>) => {
            const text = e.currentTarget.value
            dispatch(UpdateNewPostTextDialogAction(text))
        },
        addPost: () => {
            dispatch(addPostDialogAC())
        }
    }
}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


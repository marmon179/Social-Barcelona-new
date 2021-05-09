import React from 'react';
import {addPostDialogAC, InitialStateTypeDialogs} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose, Dispatch} from 'redux';

type MapStatePropsType = InitialStateTypeDialogs

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (newMessageBody: string) => {
            dispatch(addPostDialogAC(newMessageBody))
        }
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)


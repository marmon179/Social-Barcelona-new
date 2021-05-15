import React from 'react';
import {addPostDialogAC, InitialStateTypeDialogs} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect, ConnectedProps} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose, Dispatch} from 'redux';


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
const connector = connect(mapStateToProps, mapDispatchToProps)

export default compose<React.ComponentType>(connector, withAuthRedirect)(Dialogs)
//types
export type DialogsPropsType = ConnectedProps<typeof connector>
type MapStatePropsType = InitialStateTypeDialogs


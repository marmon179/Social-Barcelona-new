import React, {ChangeEvent} from 'react';
import {MessageType} from './Message/Message';
import {addPostDialogAC, DialogPageType, UpdateNewPostTextDialogAction} from '../../redux/dialogs-reducer';
import {ActionsTypes, ProfilePageType} from '../../redux/state/store';
import Dialogs from './Dialogs';
import {CombinedState, Store} from 'redux';

type Dialog_PageType = {
    store: Store<CombinedState<{ profilePage: ProfilePageType; dialogsPage: DialogPageType; }>, ActionsTypes>
}

export const DialogsContainer: React.FC<Dialog_PageType> = (props) => {

    const addPost = () => {
        props.store.dispatch(addPostDialogAC())
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        props.store.dispatch(UpdateNewPostTextDialogAction(text))
    }
    const dialogs = props.store.getState().dialogsPage.dialogs
    const messages = props.store.getState().dialogsPage.messages
    const messageForNewPostDialog = props.store.getState().dialogsPage.messageForNewPostDialog

    return (
        <div>
            <Dialogs dialogs={dialogs}
                     messages={messages}
                     messageForNewPostDialog={messageForNewPostDialog}
                     onPostChange={onPostChange}
                     addPost={addPost}/>
        </div>
    )
};


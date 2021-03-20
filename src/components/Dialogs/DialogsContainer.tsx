import React, {ChangeEvent} from 'react';
import {addPostDialogAC, UpdateNewPostTextDialogAction} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

type Dialog_PageType = {

}

export const DialogsContainer: React.FC<Dialog_PageType> = (props) => {
    return (
        <StoreContext.Consumer>
            { (store) => {
                const addPost = () => {
                    store.dispatch(addPostDialogAC())
                }
                const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
                    const text = e.currentTarget.value
                    store.dispatch(UpdateNewPostTextDialogAction(text))
                }
                const dialogs = store.getState().dialogsPage.dialogs
                const messages = store.getState().dialogsPage.messages
                const messageForNewPostDialog = store.getState().dialogsPage.messageForNewPostDialog
                return <Dialogs dialogs={dialogs}
                                messages={messages}
                                messageForNewPostDialog={messageForNewPostDialog}
                                onPostChange={onPostChange}
                                addPost={addPost}/>
            }
            }
        </StoreContext.Consumer>
    )
};


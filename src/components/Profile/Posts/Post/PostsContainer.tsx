import React, {ChangeEvent} from 'react';
import Posts from '../Posts';
import {ActionsTypes, ProfilePageType} from '../../../../redux/state/store';
import {MessageType} from './Post';
import {addPostAC, UpdateNewPostTextAction} from '../../../../redux/profile-reducer';
import {CombinedState, Store} from 'redux';
import {DialogPageType} from '../../../../redux/dialogs-reducer';

type Profile_PageType = {
    dialogsData: Array<MessageType>
    newPostText: string
    // dispatch: (action: ActionsTypes) => void
    store:Store<CombinedState<{ profilePage: ProfilePageType; dialogsPage: DialogPageType; }>, ActionsTypes>
}

const PostsContainer: React.FC<Profile_PageType> = (props) => {
    const addPost = () => {
        props.store.dispatch(addPostAC())
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        props.store.dispatch(UpdateNewPostTextAction(text))
    }
    return (
        <div>
            <Posts newPostText={props.newPostText}
                   dialogsData={props.dialogsData}
                   addPost={addPost}
                   onPostChange={onPostChange}/>
        </div>

    )
};

export default PostsContainer;
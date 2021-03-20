import React, {ChangeEvent} from 'react';
import Posts from './Posts';
import {ActionsTypes, ProfilePageType} from '../../../redux/state/store';
import {addPostAC, UpdateNewPostTextAction} from '../../../redux/profile-reducer';
import {CombinedState, Store} from 'redux';
import {DialogPageType} from '../../../redux/dialogs-reducer';

type Profile_PageType = {
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

    const dialogsData = props.store.getState().profilePage.dialogsData
    const newPostText = props.store.getState().profilePage.messageForNewPost

    return (
        <div>
            <Posts newPostText={newPostText}
                   dialogsData={dialogsData}
                   addPost={addPost}
                   onPostChange={onPostChange}/>
        </div>

    )
};

export default PostsContainer;
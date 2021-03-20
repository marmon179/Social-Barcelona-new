import React, {ChangeEvent} from 'react';
import Posts from './Posts';
import {addPostAC, UpdateNewPostTextAction} from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext';

type Profile_PageType = {}

const PostsContainer: React.FC<Profile_PageType> = (props) => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                const addPost = () => {
                    store.dispatch(addPostAC())
                }

                const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
                    const text = e.currentTarget.value
                    store.dispatch(UpdateNewPostTextAction(text))
                }

                const dialogsData = store.getState().profilePage.dialogsData
                const newPostText = store.getState().profilePage.messageForNewPost
                return <Posts newPostText={newPostText}
                              dialogsData={dialogsData}
                              addPost={addPost}
                              onPostChange={onPostChange}/>
            }
            }
        </StoreContext.Consumer>

    )
};

export default PostsContainer;
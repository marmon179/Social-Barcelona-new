import React, {ChangeEvent} from 'react';
import styles from './Posts.module.css';
import Post, {MessageType} from './Post/Post';
import {ActionsTypes, addPostAC, UpdateNewPostTextAction} from '../../../redux/state/state';

type ProfilePageType = {
    dialogsData: Array<MessageType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

const Posts: React.FC<ProfilePageType> = (props) => {
    const elementsDialogs = props.dialogsData.map(d => <Post key={d.id} message={d.message} id={d.id}/>)


    const addPost = () => {
        props.dispatch(addPostAC())
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        props.dispatch(UpdateNewPostTextAction( text))
    }
    return (
        <div className={styles.postList}>
            <div className={styles.wrapperDialogs}>
                {elementsDialogs}
            </div>
            <div className={styles.wrapperTextarea}>

                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}> </textarea>
                </div>

                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
        </div>

    )
};

export default Posts;
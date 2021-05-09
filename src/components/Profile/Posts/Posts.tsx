import React from 'react';
import styles from './Posts.module.css';
import Post, {MessageType} from './Post/Post';
import {AddMessageFormRedux} from './AddNewPostForm/AddNewPostForm';

type ProfilePageType = {
    dialogsData: Array<MessageType>
    addPost: (newMessageBody: any) => void
}

export const Posts: React.FC<ProfilePageType> = (props) => {
    const elementsDialogs = props.dialogsData.map(d => <Post key={d.id} message={d.message} id={d.id}/>)

    const onAddPost = (values: any) => {
        props.addPost(values.newMessageBody)
    }

    return (
        <div className={styles.postList}>

            <div className={styles.wrapperDialogs}>
                {elementsDialogs}
            </div>

            <AddMessageFormRedux onSubmit={onAddPost}/>
        </div>

    )
};

export default Posts;


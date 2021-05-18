import React from 'react';
import styles from './Posts.module.scss';
import Post from './Post/Post';
import {AddMessageFormRedux} from './AddNewPostForm/AddNewPostForm';
import {PostsPropsType} from './PostsContainer';


export const Posts = (props: PostsPropsType) => {
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



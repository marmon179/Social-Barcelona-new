import React from 'react';
import styles from './Posts.module.css';
import Post from './Post/Post';

const Posts = () => (
    <div className={styles.postList}>
        <Post message={'Hello people!!!!'}/>
        <Post message={'How are you?'}/>
        <Post message={'Very nice!!!'}/>
        <div >

            <div>
                <textarea> </textarea>
            </div>

            <div>
                <button>Add post</button>
            </div>
        </div>
    </div>

);

export default Posts;
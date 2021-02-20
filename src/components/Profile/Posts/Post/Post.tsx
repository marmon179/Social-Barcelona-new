import React from 'react';
import styles from './Post.module.css';
import {ProfilePhoto} from './ProfilePhoto/Post';

type MessageType = {
    message: string
    id: number
}

const Post: React.FC<MessageType> = (props) => (
    <div className={styles.postItem}>
        <ProfilePhoto/>
        <div className={styles.postMessage}>
            {props.message}
        </div>
    </div>

);

export default Post;
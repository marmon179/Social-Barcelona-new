import React from 'react';
import styles from './Post.module.css';
import {ProfilePhoto} from './ProfilePhoto/ProfilePhoto';
import {MessageType} from '../../../../redux/state/state';



const Post: React.FC<MessageType> = (props) => (
    <div className={styles.postItem}>
        <ProfilePhoto/>
        <div className={styles.postMessage}>
            {props.message}
        </div>
    </div>

);

export default Post;
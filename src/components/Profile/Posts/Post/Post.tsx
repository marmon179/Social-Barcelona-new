import React from 'react';
import styles from './Post.module.css';

export type MessageType = {
    message: string
    id: number
}

const Post: React.FC<MessageType> = (props) => (

    <div className={styles.postItem}>

        <div className={styles.avatar}>
            <img
                src="https://pbs.twimg.com/profile_images/2881220369/2b27ac38b43b17a8c5eacfc443ce3384_400x400.jpeg"
                alt="avatar"/>
        </div>

        <div className={styles.angle}/>
        <div className={styles.postMessage}>
            {props.message}
        </div>

    </div>

);

export default Post;
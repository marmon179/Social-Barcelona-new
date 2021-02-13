import styles from '../Post.module.css';
import React from 'react';

export const ProfilePhoto = (props: any) => {
    return (
        <>
            <div className={styles.postAvatar}>
                <img
                    src="https://pbs.twimg.com/profile_images/2881220369/2b27ac38b43b17a8c5eacfc443ce3384_400x400.jpeg"
                    alt="avatar"/>
            </div>

            <div className={styles.angle}/>
        </>
    )
}
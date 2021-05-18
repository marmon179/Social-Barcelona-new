import React from 'react';
import styles from './Profile.module.scss'
import {PostsContainer} from './Posts/PostsContainer';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import Preloader from '../common/Preloader/Preloader';
import {PropsType} from './ProfileContainer';
import image from '../../Img/BarcelonfProfile.jpg'


export const Profile = (props: PropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={styles.wrapper}>
            <img src={image} alt="Barca" className={styles.img}/>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <div className={styles.wrapperDialogs}>
                <PostsContainer/>
            </div>
        </div>
    )
}




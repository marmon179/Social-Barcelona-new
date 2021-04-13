import React from 'react';
import styles from './Profile.module.css'
import {PostsContainer} from './Posts/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

type ProfilePropsType = {
    profile:any
}

const Profile: React.FC<ProfilePropsType> = (props) => {
        return (
            <div className={styles.wrapper}>
                <ProfileInfo profile={props.profile} />
                <div className={styles.wrapperDialogs}>
                    <PostsContainer/>
                </div>
            </div>

        )
    }
;

export default Profile;
import React from 'react';
import Posts from './Posts/Posts';
import {ProfilePageType} from '../../redux/state/state';
import styles from './Profile.module.css'


const Profile: React.FC<ProfilePageType> = (props) => {
        return (
            <div className = {styles.wrapperDialogs}>
                <Posts dialogsData={props.dialogsData}/>
            </div>

        )
    }
;

export default Profile;
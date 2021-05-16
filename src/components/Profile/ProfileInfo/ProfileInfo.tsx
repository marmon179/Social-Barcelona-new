import React from 'react';
import styles from './ProfileInfo.module.css'
import {ProfileStatus} from './ProfileStatus';


export const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    return (
        <div>
            <div className={styles.wrapperInfo}>
                <div className={styles.imgAvatar}>
                    <img src={props.profile.photos.large} alt="img"/>
                </div>
                <div className={styles.wrapperStatus}>
                    <div className={styles.wrapperTextInfo}>
                        <div className={styles.name}>{props.profile.fullName}</div>
                        <h4>{props.profile.aboutMe}</h4>
                    </div>
                    <div className={styles.status}>
                        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
//types
type ProfileInfoPropsType = {
    profile: any
    status: string
    updateStatus: (status: string) => void
}


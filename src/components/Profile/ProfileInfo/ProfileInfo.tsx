import React from 'react';
import styles from './ProfileInfo.module.scss'
import {ProfileStatus} from './ProfileStatus';


export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile, status, updateStatus}) => {
    return (
        <div>
            <div className={styles.wrapperInfo}>
                <div className={styles.imgAvatar}>
                    <img src={profile.photos.large} alt="img"/>
                </div>
                <div className={styles.wrapperStatus}>
                    <div className={styles.wrapperTextInfo}>
                        <div className={styles.name}>{profile.fullName}</div>
                        <h4>{profile.aboutMe}</h4>
                    </div>
                    <div className={styles.status}>
                        <ProfileStatus status={status} updateStatus={updateStatus}/>
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


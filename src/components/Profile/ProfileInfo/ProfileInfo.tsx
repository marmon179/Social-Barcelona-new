import React from 'react';
import styles from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus';

type ProfileInfoPropsType = {
    profile: any
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {

        return (
            <div>
                <div className={styles.wrapperInfo}>

                    <div className={styles.imgAvatar}>
                        <img src={props.profile.photos.large} alt="img"/>
                    </div>


                    <div className={styles.wrapperStatus}>

                        <div className={styles.status}>
                            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                        </div>

                        <div className={styles.wrapperTextInfo}>
                            <h3>{props.profile.fullName}</h3>
                            <h4>{props.profile.aboutMe}</h4>
                        </div>

                    </div>

                </div>
            </div>


        )
    }
;

export default ProfileInfo;
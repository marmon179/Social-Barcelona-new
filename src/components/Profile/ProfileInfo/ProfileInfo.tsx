import React from 'react';
import styles from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

type ProfileInfoPropsType = {
    profile: any
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
        if (!props.profile) {
            return <Preloader/>
        }
        return (
            <div>
                <div>
                    <div className={styles.wrapperImg}>
                        <img
                            src="https://store.fcbarcelona.com/medias/Secciones-Desktop-copy.jpg?context=bWFzdGVyfHJvb3R8NDUyNDkyfGltYWdlL2pwZWd8aDQzL2g1OC84ODc4MzQwMDQ2ODc4L1NlY2Npb25lc19EZXNrdG9wIGNvcHkuanBnfGQwOWY1YzQ2OWYxZGY2ZDUyMzcxMThkMjgwNGNlNDBjZWM1YTc5ZDJlYzFkN2Y3ODFiYWI0NzEwNWVjMWI4MWU"
                            alt="Barca"/>
                    </div>
                </div>
                <div className={styles.wrapperInfo}>
                    <div className={styles.imgAvatar}>
                        <img src={props.profile.photos.large} alt="img"/>
                    </div>
                    <ProfileStatus status='MY STATUS.I AM READY!!!!!'/>
                    <div className={styles.wrapperTextInfo}>
                        <span>
                        <p>{props.profile.fullName}</p>
                    </span>
                        <span>
                        <p>{props.profile.aboutMe}</p>
                    </span>
                    </div>

                </div>
            </div>


        )
    }
;

export default ProfileInfo;
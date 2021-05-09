import React from 'react';
import styles from './Profile.module.css'
import {PostsContainer} from './Posts/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Preloader from '../common/Preloader/Preloader';
import {ProfilePageType} from '../../redux/state/store';

type ProfilePropsType = {
    profile: ProfilePageType | null
    status: string
    updateStatus: (status: string) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
        if (!props.profile) {
            return <Preloader/>
        }

        const image = 'https://store.fcbarcelona.com/medias/Secciones-Desktop-copy.jpg?context=bWFzdGVyfHJvb3R8NDUyNDkyfGltYWdlL2pwZWd8aDQzL2g1OC84ODc4MzQwMDQ2ODc4L1NlY2Npb25lc19EZXNrdG9wIGNvcHkuanBnfGQwOWY1YzQ2OWYxZGY2ZDUyMzcxMThkMjgwNGNlNDBjZWM1YTc5ZDJlYzFkN2Y3ODFiYWI0NzEwNWVjMWI4MWU'

        return (
            <div className={styles.wrapper}>

                <div className={styles.wrapperImg}>
                    <img src={image} alt="Barca"/>
                </div>

                <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>

                <div className={styles.wrapperDialogs}>
                    <PostsContainer/>
                </div>

            </div>

        )
    }
;

export default Profile;
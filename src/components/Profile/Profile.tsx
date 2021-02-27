import React from 'react';
import Posts from './Posts/Posts';
import styles from './Profile.module.css'
import {MessageType} from './Posts/Post/Post';

type ProfilePageType = {
    dialogsData: Array<MessageType>
    addPost: (postMessage: string) => void
}

const Profile: React.FC<ProfilePageType> = (props) => {
        return (
            <div className={styles.wrapper}>
                <div className={styles.wrapperImg}>
                    <img
                        src="https://store.fcbarcelona.com/medias/Secciones-Desktop-copy.jpg?context=bWFzdGVyfHJvb3R8NDUyNDkyfGltYWdlL2pwZWd8aDQzL2g1OC84ODc4MzQwMDQ2ODc4L1NlY2Npb25lc19EZXNrdG9wIGNvcHkuanBnfGQwOWY1YzQ2OWYxZGY2ZDUyMzcxMThkMjgwNGNlNDBjZWM1YTc5ZDJlYzFkN2Y3ODFiYWI0NzEwNWVjMWI4MWU"
                        alt="Barca"/>
                </div>
                <div className={styles.wrapperDialogs}>
                    <Posts dialogsData={props.dialogsData} addPost={props.addPost}/>
                </div>
            </div>

        )
    }
;

export default Profile;
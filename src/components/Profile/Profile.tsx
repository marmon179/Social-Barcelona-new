import React from 'react';
import Posts from './Posts/Posts';
import styles from './Profile.module.css'
import {MessageType} from './Posts/Post/Post';
import {ActionsTypes} from '../../redux/state/state';

type ProfilePageType = {
    dialogsData: Array<MessageType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
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
                    <Posts dialogsData={props.dialogsData} newPostText={props.newPostText} addPost={props.addPost}
                           updateNewPostText={props.updateNewPostText} dispatch={props.dispatch}/>
                </div>
            </div>

        )
    }
;

export default Profile;
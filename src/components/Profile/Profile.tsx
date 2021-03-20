import React from 'react';
import styles from './Profile.module.css'
import {ActionsTypes, ProfilePageType} from '../../redux/state/store';
import PostsContainer from './Posts/PostsContainer';
import {CombinedState, Store} from 'redux';
import {DialogPageType} from '../../redux/dialogs-reducer';

type Profile_PageType = {
    store: Store<CombinedState<{ profilePage: ProfilePageType; dialogsPage: DialogPageType; }>, ActionsTypes>
}

const Profile: React.FC<Profile_PageType> = (props) => {
        return (
            <div className={styles.wrapper}>
                <div className={styles.wrapperImg}>
                    <img
                        src="https://store.fcbarcelona.com/medias/Secciones-Desktop-copy.jpg?context=bWFzdGVyfHJvb3R8NDUyNDkyfGltYWdlL2pwZWd8aDQzL2g1OC84ODc4MzQwMDQ2ODc4L1NlY2Npb25lc19EZXNrdG9wIGNvcHkuanBnfGQwOWY1YzQ2OWYxZGY2ZDUyMzcxMThkMjgwNGNlNDBjZWM1YTc5ZDJlYzFkN2Y3ODFiYWI0NzEwNWVjMWI4MWU"
                        alt="Barca"/>
                </div>
                <div className={styles.wrapperDialogs}>
                    <PostsContainer store={props.store}/>
                </div>
            </div>

        )
    }
;

export default Profile;
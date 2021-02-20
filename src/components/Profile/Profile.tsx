import React from 'react';
import Posts from './Posts/Posts';
import {ProfilePageType} from '../../redux/state/state';



const Profile: React.FC<ProfilePageType> = (props) => {
        return (
            <div>
                <Posts dialogsData={props.dialogsData}/>
            </div>

        )
    }
;

export default Profile;
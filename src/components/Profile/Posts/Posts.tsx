import React from 'react';
import styles from './Posts.module.css';
import Post from './Post/Post';
import {ProfilePageType} from '../../../index';


const Posts: React.FC<ProfilePageType> = (props) => {

    let elementsDialogs = props.dialogsData.map(d => <Post message={d.message} id={d.id}/>)
    return (
        <div className={styles.postList}>
            {elementsDialogs}
            <div>

                <div>
                    <textarea> </textarea>
                </div>

                <div>
                    <button>Add post</button>
                </div>
            </div>
        </div>

    )
};

export default Posts;
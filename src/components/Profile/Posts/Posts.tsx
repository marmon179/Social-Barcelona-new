import React from 'react';
import styles from './Posts.module.css';
import Post from './Post/Post';
import {ProfilePageType} from '../../../redux/state/state';


const Posts: React.FC<ProfilePageType> = (props) => {

    let elementsDialogs = props.dialogsData.map(d => <Post message={d.message} id={d.id}/>)
    return (
        <div className={styles.postList}>
            <div className={styles.wrapperDialogs}>
                {elementsDialogs}
            </div>
            <div className={styles.wrapperTextarea}>
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
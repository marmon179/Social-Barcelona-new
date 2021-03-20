import React, {ChangeEvent} from 'react';
import styles from './Posts.module.css';
import Post, {MessageType} from './Post/Post';

type ProfilePageType = {
    dialogsData: Array<MessageType>
    newPostText: string
    addPost: () => void
    onPostChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export const Posts: React.FC<ProfilePageType> = (props) => {
    const elementsDialogs = props.dialogsData.map(d => <Post key={d.id} message={d.message} id={d.id}/>)

    return (
        <div className={styles.postList}>
            <div className={styles.wrapperDialogs}>
                {elementsDialogs}
            </div>
            <div className={styles.wrapperTextarea}>

                <div>
                    <textarea onChange={props.onPostChange} value={props.newPostText}> </textarea>
                </div>

                <div>
                    <button onClick={props.addPost}>Add post</button>
                </div>

            </div>
        </div>

    )
};

export default Posts;
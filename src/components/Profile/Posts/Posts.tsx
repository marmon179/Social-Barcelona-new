import React, {ChangeEvent} from 'react';
import styles from './Posts.module.css';
import Post, {MessageType} from './Post/Post';

type ProfilePageType = {
    dialogsData: Array<MessageType>
    newPostText: string
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
}

const Posts: React.FC<ProfilePageType> = (props) => {
    const elementsDialogs = props.dialogsData.map(d => <Post key={d.id} message={d.message} id={d.id}/>)

    const addPost = () => {
        props.addPost(props.newPostText)

    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)

    }
    return (
        <div className={styles.postList}>
            <div className={styles.wrapperDialogs}>
                {elementsDialogs}
            </div>
            <div className={styles.wrapperTextarea}>

                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}> </textarea>
                </div>

                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
        </div>

    )
};

export default Posts;
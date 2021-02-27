import React from 'react';
import styles from './Posts.module.css';
import Post, {MessageType} from './Post/Post';

type ProfilePageType = {
    dialogsData: Array<MessageType>
    addPost: (postMessage: string) => void
}

const Posts: React.FC<ProfilePageType> = (props) => {
    let elementsDialogs = props.dialogsData.map(d => <Post message={d.message} id={d.id}/>)

    let newPostElement = React.createRef <HTMLTextAreaElement>()

    let addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current?.value)
        }

    }
    return (
        <div className={styles.postList}>
            <div className={styles.wrapperDialogs}>
                {elementsDialogs}
            </div>
            <div className={styles.wrapperTextarea}>

                <div>
                    <textarea ref={newPostElement}> </textarea>
                </div>

                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
        </div>

    )
};

export default Posts;
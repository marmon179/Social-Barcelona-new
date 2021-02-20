import React from 'react';
import styles from './Posts.module.css';
import Post from './Post/Post';

const Posts = () => {

    let dialogsData = [
        {id: 1, message: 'Hello people!!!!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Very nice!!!'},
    ]

    let elementsDialogs = dialogsData.map(d => <Post message={d.message} id={d.id}/>)
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
import React from 'react';
import styles from './Dialogs.module.css'
import {DialogItem, DialogsType,} from './DialogItem/DialogItem';
import {Message, MessageType} from './Message/Message';

type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}

const Dialogs: React.FC<DialogPageType> = (props) => {
    let elementDialogs = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let elementsMessages = props.messages.map(m => <div><Message message={m.message} id={m.id}/></div>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        alert(newPostElement.current?.value)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperImage}>
                <img
                    src="https://www.fcbarcelona.com/photo-resources/2020/11/02/d2c1d3ab-437b-400a-8df2-3e420b9f0799/imatge_avatars02.jpg?width=1024&height=448"
                    alt="Barca"/>
            </div>
            <div className={styles.wrapperWrapper}>
                <div className={styles.dialogsWrapper}>
                    <div>
                        {elementDialogs}
                    </div>

                    <div>
                        {elementsMessages}
                    </div>
                </div>
                <div className={styles.wrapperTextarea}>
                    <div>
                        <textarea ref={newPostElement}></textarea>
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;
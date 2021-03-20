import React, {ChangeEvent} from 'react';
import styles from './Dialogs.module.css'
import {DialogItem, DialogsType,} from './DialogItem/DialogItem';
import {Message, MessageType} from './Message/Message';
import {addPostDialogAC, UpdateNewPostTextDialogAction} from '../../redux/dialogs-reducer';
import {ActionsTypes} from '../../redux/state/store';

type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    dispatch: (action: ActionsTypes) => void
    messageForNewPostDialog: string
}

const Dialogs: React.FC<DialogPageType> = (props) => {
    const elementDialogs = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const elementsMessages = props.messages.map(m => <div><Message key={m.id} message={m.message} id={m.id}/></div>)

    const addPost = () => {
        props.dispatch(addPostDialogAC())
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        props.dispatch(UpdateNewPostTextDialogAction(text))

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
                        <textarea value={props.messageForNewPostDialog} onChange={onPostChange}/>
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
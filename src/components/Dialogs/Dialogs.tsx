import React from 'react';
import styles from './Dialogs.module.css'
import {DialogItem, DialogsType,} from './DialogItem/DialogItem';
import {Message, MessageType} from './Message/Message';
import {AddMessageFormRedux} from './AddMessageForm/AddMessageForm';
import {DialogsPropsType} from './DialogsContainer';


export type NewMessageFormValuesType = {
    newMessageBody: string
}
export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const elementDialogs = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const elementsMessages = props.messages.map(m => <div><Message key={m.id} message={m.message} id={m.id}/></div>)

    const img = 'https://www.fcbarcelona.com/photo-resources/2020/11/02/d2c1d3ab-437b-400a-8df2-3e420b9f0799/imatge_avatars02.jpg?width=1024&height=448'

    const addNewMessage = (values: NewMessageFormValuesType) => {
        props.addPost(values.newMessageBody)
    }
    return (
        <div className={styles.wrapper}>

            <div className={styles.wrapperImage}>
                <img src={img} alt="Barca"/>
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
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )

};

export default Dialogs;
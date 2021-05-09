import React from 'react';
import styles from './Dialogs.module.css'
import {DialogItem, DialogsType,} from './DialogItem/DialogItem';
import {Message, MessageType} from './Message/Message';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    addPost: (newMessageBody:any) => void
    isAuth: boolean
}

export const Dialogs: React.FC<DialogPageType> = (props) => {
    const elementDialogs = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const elementsMessages = props.messages.map(m => <div><Message key={m.id} message={m.message} id={m.id}/></div>)

    const addNewMessage = (values:any) => {
        props.addPost(values.newMessageBody)
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
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
};

type FormDataType = {
    newMessageBody: string
}

export const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.wrapperTextarea}>
            <div>
                <Field component={'textarea'} name={'newMessageBody'} placeholder={'Enter your message'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
export const AddMessageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;
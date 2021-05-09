import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import React from 'react';
import styles from '../Dialogs.module.css';

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
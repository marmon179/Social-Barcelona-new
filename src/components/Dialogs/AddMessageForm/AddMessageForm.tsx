import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import React from 'react';
import styles from '../Dialogs.module.css';
import {Textarea} from '../../common/FormsControls/FormsControls';
import {maxLengthCreator, required} from '../../../utils/validators/validators';


const maxLength50 = maxLengthCreator(50)

export const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.wrapperTextarea}>
            <div>
                <Field component={Textarea} name={'newMessageBody'}
                       placeholder={'Enter your message'} validate={[required, maxLength50]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
export const AddMessageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)
//types
type FormDataType = {
    newMessageBody: string
}
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import React from 'react';
import styles from '../Posts.module.css';
import {maxLengthCreator, required} from '../../../../utils/validators/validators';
import {Textarea} from '../../../common/FormsControls/FormsControls';

type FormDataType = {
    newMessageBody: string
}
const maxLength10 = maxLengthCreator(10)

const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.wrapperTextarea}>
            <div>
                <Field component={Textarea} name={'newMessageBody'}
                       placeholder={'Enter your message'} validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
export const AddMessageFormRedux = reduxForm<FormDataType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)
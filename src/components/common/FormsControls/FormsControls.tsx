import React from 'react';
import styles from './FormsControls.module.scss'
import {Field} from 'redux-form';

type TextareaPropsType = {
    input: string
    meta: any
}

const FormControl: React.FC<TextareaPropsType> = ({meta: {touched, error}, children}) => {

    const hasError = touched && error

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>

            <div>
                {children}
            </div>

            {hasError && <span>{error}</span>}

        </div>
    );
};


export const Textarea: React.FC<TextareaPropsType> = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><textarea{...input}{...restProps}/></FormControl>

};

export const Input: React.FC<TextareaPropsType> = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><input{...input}{...restProps}/></FormControl>

};
export const createField = <FormKeysType extends string>(placeholder: any,
                                                         name: FormKeysType,
                                                         validators: any,
                                                         component: any,
                                                         props?: any,
                                                         text?: any) => (
    <div>
        <Field placeholder={placeholder} name={name}
               component={component} validate={validators}
               {...props}
        />{text}
    </div>)



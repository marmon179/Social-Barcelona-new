import React from 'react';
import styles from './FormsControls.module.scss'

type TextareaPropsType = {
    input: string
    meta: any
}

const FormControl: React.FC<TextareaPropsType> = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>

            <div>
                {props.children}
            </div>

            {hasError && <span>{meta.error}</span>}

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


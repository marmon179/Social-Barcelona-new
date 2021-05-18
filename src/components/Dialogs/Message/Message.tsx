import React from 'react';
import styles from './Message.module.scss';


export const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={styles.message}>
            {props.message}
        </div>
    )
}
//types
export type MessageType = {
    message: string
    id: number
}
import React from 'react';
import styles from './Message.module.css';

export type MessageType = {
    message: string
    id: number
}

export const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={styles.message}>
            {props.message}
        </div>
    )
}
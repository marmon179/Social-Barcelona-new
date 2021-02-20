import React from 'react';
import styles from './Message.module.css';
import {MessageType} from '../../../redux/state/state';


export const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={styles.message}>
            {props.message}
        </div>
    )
}
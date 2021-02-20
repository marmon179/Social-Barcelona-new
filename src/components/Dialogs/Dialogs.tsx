import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'
import styles from '../Navbar/Navbar.module.css';

type DialogsType = {
    name: string,
    id: number,
}

type MessageType = {
    message: string
    id: number
}

const DialogItem: React.FC<DialogsType> = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div>
            <NavLink to={path} className={s.dialogName} activeClassName={styles.activeLink}>{props.name}</NavLink>
        </div>
    )
}

const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Sascha'},
        {id: 2, name: 'Maksim'},
        {id: 3, name: 'Katia'},
    ]

    let messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Hi!'},
        {id: 3, message: 'hello'},
    ]

    let elementDialogs = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let elementsMessages = messages.map(m => <Message message={m.message} id={m.id}/>)
    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialog}>
                {elementDialogs}
            </div>

            <div className={s.messageDialog}>
                {elementsMessages}
            </div>
        </div>)
};

export default Dialogs;
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
}

const DialogItem: React.FC<DialogsType> = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div >
            <NavLink to={path} className={s.dialogName} activeClassName={styles.activeLink}>{props.name}</NavLink>
        </div >
    )
}

const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = () => (
    <div className={s.dialogsWrapper}>
        <div className={s.dialog}>
            <DialogItem name='Sascha' id={1}/>
            <DialogItem name='Maksim' id={2}/>
            <DialogItem name='Katia' id={3}/>
        </div>

        <div className={s.messageDialog}>
            <Message message={'Hello'}/>
            <Message message={'Hi'}/>
            <Message message={'HI!!!'}/>
        </div>
    </div>

);

export default Dialogs;
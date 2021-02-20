import React from 'react';
import {NavLink} from 'react-router-dom';
import s from '../Dialogs.module.css';
import styles from '../../Navbar/Navbar.module.css';
import {DialogsType} from '../../../index';



export const DialogItem: React.FC<DialogsType> = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div>
            <NavLink to={path} className={s.dialogName} activeClassName={styles.activeLink}>{props.name}</NavLink>
        </div>
    )
}
import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './DialogItem.module.scss';


export const DialogItem: React.FC<DialogsType> = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div>
            <NavLink to={path} className={styles.dialogName} activeClassName={styles.activeLink}>{props.name}</NavLink>
        </div>
    )
}
//types
export type DialogsType = {
    name: string,
    id: number,
}
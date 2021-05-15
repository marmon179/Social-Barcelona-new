import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Header.module.css'
import {Button} from '@material-ui/core';
import {HeaderPropsType} from './HeaderContainer';


const img = 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png'

export const Header = (props: HeaderPropsType) => (

    <div className={styles.header}>
        <img src={img} alt="Logo"/>
        <div className={styles.loginBlock}>
            {props.isAuth
                ? <div>
                    <span className={styles.login}>{props.login}</span>
                    <Button variant="contained" color="secondary" onClick={props.logout}>Log out</Button>
                </div>
                : <NavLink to={'/login'} className={styles.login}>Login</NavLink>}
        </div>

    </div>
);


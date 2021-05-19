import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Header.module.scss'
import {HeaderPropsType} from './HeaderContainer';
import LinearIndeterminate from '../common/progress/Progress';


const img = 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png'

export const Header = (props: HeaderPropsType) => (

    <div className={styles.header}>
        <div className={styles.image}>
            <img src={img} alt="Logo"/>
        </div>
        <div className={styles.loginBlock}>
            {props.isAuth
                ? <div>
                    <span className={styles.login}>{props.login}</span>
                    <button className={styles.button} onClick={props.logout}>Log out</button>
                </div>
                : <NavLink to={'/login'} className={styles.login}>Login</NavLink>}
        </div>
        <div className={styles.progress}>
            {props.isFetching ? <LinearIndeterminate/> : null}
        </div>

    </div>
);


import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Header.module.css'

type HeaderPropsType = {
    isAuth: boolean
    login: null
    logout: () => void

}

const img = 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png'

const Header = (props: HeaderPropsType) => (

    <div className={styles.header}>

        <img src={img} alt="Logo"/>

        <div className={styles.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>

    </div>
);

export default Header;
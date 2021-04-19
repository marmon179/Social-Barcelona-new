import React, {ReactNode} from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Header.module.css'


const Header = (props: any) => (

    <div className={styles.header}>
        <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png"
            alt="Logo"/>
        <div className={styles.loginBlock}>
            {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}

        </div>
    </div>
);

export default Header;
import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Header.module.css'

type HeaderPropsType = {
    isAuth: boolean
    login: null

}

const img = 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png'

const Header = (props: HeaderPropsType) => (

    <div className={styles.header}>

        <img src={img} alt="Logo"/>

        <div className={styles.loginBlock}>
            {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
        </div>

    </div>
);

export default Header;
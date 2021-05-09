import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Navbar.module.css';


const Navbar = () => (
    <nav className={styles.navbar}>
        <ul className={styles.list}>
            <li>
                <NavLink exact to='/login' className={styles.link} activeClassName={styles.activeLink}>Login</NavLink>
            </li>
            <li>
                <NavLink to='/profile' className={styles.link} activeClassName={styles.activeLink}>Profile</NavLink>
            </li>
            <li>
                <NavLink to='/dialogs' className={styles.link} activeClassName={styles.activeLink}>Dialogs</NavLink>
            </li>
            <li>
                <NavLink to='/settings' className={styles.link} activeClassName={styles.activeLink}>Settings</NavLink>
            </li>
            <li>
                <NavLink to='/users' className={styles.link} activeClassName={styles.activeLink}>Users</NavLink>
            </li>
        </ul>
    </nav>

);

export default Navbar;
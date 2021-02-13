import React from 'react';
import styles from './Header.module.css'


const Header = () => (

    <div className={styles.header}>
        <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png"
            alt="Logo"/>
    </div>
);

export default Header;
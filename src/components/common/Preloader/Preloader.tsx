import React from 'react';
import preloader from '../../../Img/Ball-1s-200px.svg';
import styles from './Preloader.module.css'

const Preloader = (props: any) => {
    return <div className={styles.wrapper}>
        <img src={preloader}/>
    </div>
};

export default  Preloader;
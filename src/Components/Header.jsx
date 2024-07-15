import React from 'react'
import styles from './Header.module.css'
import {Link} from 'react-router-dom'


  

const Header = () => {
    return <header className={styles.header}>
        <nav className={`${styles.nav} container`}>
            <Link className={styles.logo} to="/" aria-label='Moto - Home'>
                <img src={require('../Assets/logo-moto-24.png')} />
            </Link>
            <Link className={styles.login} to="/login">Login / Criar</Link>
        </nav>
    </header>
};

export {Header}  
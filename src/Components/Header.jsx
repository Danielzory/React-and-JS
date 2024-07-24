import React from 'react'
import styles from './Header.module.css'
import {Link} from 'react-router-dom'
import { UserContext } from '../UserContext'; 


  

const Header = () => {
    const {data} = React.useContext(UserContext);

    return <header className={styles.header}>
        <nav className={`${styles.nav} container`}>
            <Link className={styles.logo} to="/" aria-label='Moto - Home'>
                <img src={require('../Assets/logo-moto-24.png')} />
            </Link>

            {data ? (
                <Link className={styles.login} to="/conta">{data.nome}</Link>        
            ) : 
            <Link className={styles.login} to="/login">Login / Criar</Link>
            }
            
        </nav>
    </header>
};

export {Header}  
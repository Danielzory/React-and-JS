import React from 'react'
import styles from './Footer.module.css'
import logo from '../Assets/logo-moto-24.png'

  const Footer = () => {
    return <footer className={styles.footer} >
      <p>
        <img src={logo} alt="Moto24 logo" className={styles.logo} />
        Road. Alguns direitos reservados @Zory
      </p>
    </footer>
  };

export {Footer}  
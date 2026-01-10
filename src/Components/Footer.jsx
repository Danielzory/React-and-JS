import React from 'react';
import styles from './Footer.module.css';
// A sintaxe correta para CRA é esta:
import { ReactComponent as Logo } from '../Assets/carregando.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo className={styles.logoReact} aria-label="Logo Carregando" />
      <p>Road. Alguns direitos reservados @Zory</p>
    </footer>
  );
};

export {Footer};
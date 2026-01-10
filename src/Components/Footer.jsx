import styles from './Footer.module.css';
import { ReactComponent as Logo } from '../Assets/loading.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Logo className={styles.logo} title="Carregando Logo" />
        <p>
          Road. Alguns direitos reservados @Zory {currentYear}
        </p>
      </div>
    </footer>
  );
};

export {Footer}
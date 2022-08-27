import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3>Seja bem vindo!</h3>
      <p>MiniBlog em <strong>React</strong> &copy; 2022</p>
    </footer>
  )
}

export default Footer;
import styles from './Footer.module.css';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <Container fluid className='text-center'>
            <p className='text-white'>2022 &copy; Todos os direitos reservados. <span className='text-info'>React + TS Todo</span></p>
        </Container>
    </footer>
  )
}

export default Footer
import styles from './Header.module.css';
import { Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header className={styles.header}>
        <Container fluid className='text-center bg-dark py-3'>
            <h1 className='display-6 text-info'>TODO React + TS</h1>
        </Container>
    </header>
  )
}

export default Header
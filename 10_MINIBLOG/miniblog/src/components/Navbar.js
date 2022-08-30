import styles from './Navbar.module.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useAuthentication } from '../hooks/useAuthentication';
import { useAuthValue } from '../context/AuthContext';
import SearchForm from './SearchForm';

const NavBar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  return (
    <Navbar bg="dark" expand="lg" className={styles.navigation}>
        <Container>
            <Navbar.Brand href="#home">MiniBlog</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>Sobre</NavLink>
                {!user &&
                  <>
                    <NavLink to='/login'>Login</NavLink>
                    <NavLink to='/register'>Cadastro</NavLink>
                  </>
                }
                {user &&
                  <>
                    <NavLink to='/posts/create'>Criar Post</NavLink>
                    <NavLink to='/dashboard'>Dashboard</NavLink>
                    <Nav.Link onClick={logout}>Sair</Nav.Link>
                  </>
                }
            </Nav>
              <SearchForm />
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar;
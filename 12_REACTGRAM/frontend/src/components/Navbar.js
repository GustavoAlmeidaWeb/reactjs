import './Navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { Container, Navbar, Nav, Form, Button, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Hooks
import { useAuth } from '../hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import { logout, reset } from '../slices/authSlice';


const NavBar = () => {

  const { auth } = useAuth();
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());

    navigate('/');
  }

  return (
    <Row>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">ReactGram</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Pesquisar..."
                  className="me-2"
                  aria-label="Pesquisar..."
                />
                <Button variant="dark"><FontAwesomeIcon icon="search" /></Button>
              </Form>
            </Nav>
            <Nav>
              {auth ? (
                <>
                  <NavLink to="/" className='btn btn-dark'><FontAwesomeIcon icon="house" /></NavLink>
                  {user && (
                    <NavLink to={`/users/${user._id}`} className='btn btn-dark'><FontAwesomeIcon icon="camera" /></NavLink>
                  )}
                  <NavLink to="/profile" className='btn btn-dark'><FontAwesomeIcon icon="user" /></NavLink>
                  <NavLink to="/logout" className='btn btn-dark' onClick={handleLogout}>Sair <FontAwesomeIcon icon="right-from-bracket" /></NavLink>
                </>
              ) : (
                <>
                  <NavLink to="/login" className='btn btn-dark'>Entrar</NavLink>
                  <NavLink to="/register" className='btn btn-dark'>Cadastre-se</NavLink>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  )
}

export default NavBar;
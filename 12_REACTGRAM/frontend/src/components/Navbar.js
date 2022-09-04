import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { Container, Navbar, Nav, Form, Button, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => {
  return (
    <Row>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">ReactGram</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* <Nav className="me-auto">
              <Nav.Link href="#features"> Home</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav> */}
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
              <NavLink to="/" className='btn btn-dark'><FontAwesomeIcon icon="house" /></NavLink>
              <NavLink to="/login" className='btn btn-dark'>Entrar</NavLink>
              <NavLink to="/register" className='btn btn-dark'>Cadastre-se</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  )
}

export default NavBar;
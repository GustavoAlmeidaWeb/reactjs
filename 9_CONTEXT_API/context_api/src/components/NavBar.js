import './NavBar.css';
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchForm from './SearchForm';

const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React Context API</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/"><FontAwesomeIcon icon="house" /> Home</NavLink>
            <NavLink to="/about"><FontAwesomeIcon icon="book" /> Sobre</NavLink>
            <NavLink to="/products"><FontAwesomeIcon icon="shopping-cart" /> Produtos</NavLink>
            <NavLink to="/contact"><FontAwesomeIcon icon="mobile-phone" /> Contato</NavLink>
          </Nav>
          <SearchForm />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;

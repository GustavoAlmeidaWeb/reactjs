import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
        {/* <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Sobre</Link></li>
        </ul> */}
        {/* <NavLink to="/" 
          className={({isActive}) => (isActive ? 'Ativo' : 'nao-ativo')}>
            Home
        </NavLink> */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>
    </nav>
  )
}

export default NavBar;
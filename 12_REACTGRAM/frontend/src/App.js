import './App.css';

// BootStrap
import { Container, Row } from 'react-bootstrap';

// Router
import { Routes, Route, Navigate } from 'react-router-dom';

// Pages
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

// Components
import NavBar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <Container fluid className="App text-white">
      <NavBar />
      <Container className='main'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
        </Routes>
      </Container>
      <Footer />
    </Container>
  );
}

export default App;

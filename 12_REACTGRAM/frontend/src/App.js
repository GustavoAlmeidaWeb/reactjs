import './App.css';

// BootStrap
import { Container, Row } from 'react-bootstrap';

// Hooks
import { useAuth } from './hooks/useAuth';

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

  const { auth,loading } = useAuth();

  if(loading){
    return <p>Carregando...</p>;
  }

  return (
    <Container fluid className="App text-white">
      <NavBar />
      <Container className='main'>
        <Routes>
          <Route path='/' element={auth ? <Home /> : <Navigate to='/login'/>}/>
          <Route path='/login' element={!auth ? <Login /> : <Navigate to='/'/>}/>
          <Route path='/register' element={!auth ? <Register /> : <Navigate to='/'/>}/>
        </Routes>
      </Container>
      <Footer />
    </Container>
  );
}

export default App;

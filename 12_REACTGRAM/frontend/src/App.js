import './App.css';

// Router
import { Routes, Route, Navigate } from 'react-router-dom';

// Pages
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

// BootStrap
import { Container } from 'react-bootstrap';


function App() {
  return (
    <Container fluid className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </Container>
  );
}

export default App;

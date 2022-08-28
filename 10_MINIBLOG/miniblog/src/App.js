import './App.css';

// Router
import { Routes, Route, Navigate } from 'react-router-dom';

// Checa se se tem usuario logado
import { onAuthStateChanged } from 'firebase/auth';

// Hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

// Context
import { AuthProvider } from './context/AuthContext';

// Bootstrap
import { Container } from 'react-bootstrap';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import CreatePost from './pages/CreatePost/CreatePost';
import Dashboard from './pages/Dashboard/Dashboard';


function App() {

  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      setUser(user);
    })
  },[auth])

  if(loadingUser){
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={{user}}>
        <NavBar />
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/posts/create' element={<CreatePost />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </Container>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
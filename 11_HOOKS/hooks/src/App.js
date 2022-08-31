import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <h1>Hooks</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>Sobre</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;

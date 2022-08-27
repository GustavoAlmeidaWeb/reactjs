import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Products from './pages/Products';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import Info from './pages/Info';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products/:id/info" element={<Info />} />
        {/* Rota de busca */}
        <Route path="/search" element={<Search />} />
        {/* Redirecionamento */}
        <Route path="/company" element={<Navigate to="/about"/>} />
        {/* Página não encontrada */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

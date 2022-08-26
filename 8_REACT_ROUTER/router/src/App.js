import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import SearchForm from './components/SearchForm';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      {/* Tudo que tiver aqui dentro pode ser rotacionado */}
      <BrowserRouter>
        {/* Pega navbar via componente */}
        <NavBar />
        {/* Formulário de busca */}
        <SearchForm />
        <Routes>
          {/* Rotas Comuns */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Rota dinâmica */}
          <Route path="/products/:id" element={<Product />} />
          <Route path="/products/:id/info" element={<Info />} />
          {/* Rota de busca */}
          <Route path="/search" element={<Search />} />
          {/* Redirecionamento */}
          <Route path="/company" element={<Navigate to="/about"/>} />
          {/* Página não encontrada */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

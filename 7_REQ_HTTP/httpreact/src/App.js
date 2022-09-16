import './App.css';

import { useState } from 'react';

// 4 - Custom Hook
import { useFetch } from './hooks/useFetch';

const url = 'http://localhost:3000/products';

function App() {

  // 4 - Custom Hook => Get Data
  const { data: items, httpConfig, loading, error } = useFetch(url);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [idItem, setIdItem] = useState(null);

  // 2 - Add product
  const handleSubmit = async (e) => {

    e.preventDefault();
    const product = {
      name, price: Number(price),
    };

    // 5 - Refatoring Post and Update Product
    !idItem ? httpConfig(product, 'POST') : httpConfig(product, 'PUT', idItem);

    setName('');
    setPrice('');
    setIdItem(null);
  };

  // Remove product
  const handleRemove = (id) => {
    httpConfig(id, 'DELETE');
  }

  // Edit product
  const handleEdit = (name, price, id) => {
    setName(name);
    setPrice(price);
    setIdItem(id);
  }
  
  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {/* 6 - loading */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
          {items && items.map((product) => (
            <li key={product.id}>{product.name} - {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)} - <button onClick={() => handleEdit(product.name, product.price, product.id)}>Editar</button> - <button onClick={()=> handleRemove(product.id)}>Excluir</button></li>
          ))}
        </ul>
      )}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)}/>
          </label>
          <label>
            Preço:
            <input type="number" step="any" value={price} name="price" onChange={(e) => setPrice(e.target.value)}/>
          </label>
          {!loading && <input type="submit" value="Salvar" />}
          {loading && <input type="submit" disabled value="Aguarde..." />}
        </form>
      </div>
      <hr />
    </div>
  );
}

export default App;
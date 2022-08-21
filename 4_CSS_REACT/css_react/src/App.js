import './App.css';
import MyComponent from './components/MyComponent';
import {useState} from 'react';
import Title from './components/Title';

function App() {
  const n = 25;
  const [name] = useState('Gustavo');
  const redTitle = true;
  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com CSS</h1>
      
      {/* CSS de componente */}
      <MyComponent />
      <p>Paragrafo do App.js</p>
      
      {/* CSS Inline */}
      <p style={{color:'blue', padding: '20px', borderTop: '2px solid red'}}>Este elemento foi estilizado inline</p>
      
      {/* CSS Inline Dinamico */}
      <h2 style={n > 15 ? ({color: 'blue'}) : ({color: 'magenta'})}>Inline Dinamico CSS</h2>
      <h2 style={n < 15 ? ({color: 'blue'}) : ({color: 'magenta'})}>Inline Dinamico CSS</h2>

      <h2 style={name === 'Gustavo' ? ({color: 'green', backgroundColor: 'black'}) : null}>
        Gustavo
      </h2>

      {/* Classe Dinamica */}
      <h2 className={redTitle ? 'red-title' : 'title'}>Este titulo tera classe dinamica</h2>

      {/* CSS Módulos */}
      <Title />

    </div>
  );
}

export default App;

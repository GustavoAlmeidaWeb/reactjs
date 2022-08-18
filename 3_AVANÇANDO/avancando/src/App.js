import './App.css';
import PerfilLinkedIN from './assets/perfil-linkedin.jpg';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">
      <h1>Avançando em react</h1>
      {/* Imagem em Public */}
      <div>
        <img src="/perfil.jpg" alt="Imagem de perfil do Gustavo" />
      </div>
      {/* Imagem em Assets */}
      <div>
        <img src={PerfilLinkedIN} alt="Perfil do Gustavo do linkedin" />
      </div>
      <ManageData />
      <ListRender />
    </div>
  );
}

export default App;

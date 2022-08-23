import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{name: 'Gustavo', email: 'guss.oitenta@gmai.com', bio: 'Sou um programmer', role: 'admin'}}/>
    </div>
  );
}

export default App;

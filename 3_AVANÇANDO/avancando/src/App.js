import { useState } from 'react';
import './App.css';
import PerfilLinkedIN from './assets/perfil-linkedin.jpg';
import CarDetails from './components/CarDetails';
import ChangeMessageState from './components/ChangeMessageState';
import ConditionalRender from './components/ConditionalRender';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Fragments from './components/Fragments';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import Message from './components/Message';
import ShowUserName from './components/ShowUserName';
import UserDetails from './components/UserDetails';

function App() {

  const [name] = useState('Gustavo');

  const [cars] = useState([
    { id: 1, brand: 'VW', km: 20000, color: 'Vermelho', newCar: false},
    { id: 2, brand: 'Hyundai', km: 5000, color: 'Prata', newCar: false},
    { id: 3, brand: 'GM', km: 0, color: 'Preto', newCar: true}
  ]);

  const [users] = useState([
    { id: 1, nome: 'Gustavo', idade: 33, profissao: 'Front End', cnh: true},
    { id: 2, nome: 'Ana Paula', idade: 25, profissao: 'Advogada', cnh: true},
    { id: 3, nome: 'Junior', idade: 16, profissao: 'Estudante', cnh: false}
  ]);

  function showMessage(){
    console.log('Boaaaa');
  }

  const [message, setMessage] = useState('');

  const handleMessage = (msg) => {
    setMessage(msg);
  }

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
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={name} />
      {/* destructuring */}
      <CarDetails brand='VW' km={1000} color='Prata' newCar={false} />
      {/* Reaproveitando */}
      <CarDetails brand='Ford' km={25000} color='Prata' newCar={false}/>
      <CarDetails brand='Fiat' km={0} color='Prata' newCar={true}/>
      {/* loop */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
      ))}

      {users.map((user) => (
        <UserDetails key={user.id} nome={user.nome} idade={user.idade} profissao={user.profissao} cnh={user.cnh}/>
      ))}

      {/* Fragments */}
      <Fragments test='teste'/>
      {/* Children  */}
      <Container value='Ok'>
        <p>Aqui esta o conteudo</p>
      </Container>
      {/* Executar function */}
      <ExecuteFunction myfunc={showMessage} />

      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage} />
    </div>
  );
}

export default App;

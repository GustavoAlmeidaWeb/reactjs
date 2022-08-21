import './App.css';
import { useState } from 'react';
import CarDetails from './components/CarDetails';

function App() {

  const [cars] = useState([
    {id: 1, name: 'Ford', color: 'Preto'},
    {id: 2, name: 'VW', color: 'Branco'},
    {id: 3, name: 'GM', color: 'Vermelho'}
  ])

  return (
    <div className="App">
      <h1>Challenge CSS</h1>

      {cars.map((car)=>(
        <CarDetails key={car.id} name={car.name} color={car.color}/>
      ))}

    </div>
  );
}

export default App;

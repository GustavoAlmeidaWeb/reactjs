import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const ChangeCounter = () => {
  const {counter, setCounter} = useContext(CounterContext);
  
  return (
    <div>
        <button className="btn btn-primary" onClick={() => setCounter(counter +1)}>Adicionar Valor</button>
    </div>
  )
}

export default ChangeCounter;
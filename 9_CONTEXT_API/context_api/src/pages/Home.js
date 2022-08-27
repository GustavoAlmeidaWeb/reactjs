// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
    // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();
  const { color, dispatch } = useTitleColorContext();

  // Alterando state
  const setTitleColor = (color) => {
    dispatch({ type:color });
  }

  return (
    <div>
        <h1 style={{color:color}}>Home</h1>
        <p>Valor do contador: {counter}</p>
        <ChangeCounter />
        {/* alterando context complexo */}
        <div>
          <button onClick={()=> setTitleColor("RED")}>Vermelho</button>
          <button onClick={()=> setTitleColor("BLUE")}>Vermelho</button>
        </div>
    </div>
  )
}

export default Home;
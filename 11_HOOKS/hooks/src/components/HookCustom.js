import { useState } from "react";
import { usePrevious } from "../hooks/usePrevious";

const HookCustom = () => {

    const [number, setNumber] = useState(0);
    const previousValue = usePrevious(number);

  return (
    <div>
        <h2>HookCustom</h2>
        <p>Valor Atual: {number}</p>
        <p>Valor Anterior: {previousValue}</p>
        <button onClick={() => setNumber(Math.random())}>Clique</button>
        <hr />
    </div>
  )
}

export default HookCustom
import { useEffect, useState } from "react";

const HookUseEffect = () => {

    // 1 - useEffect sem dependencias
    useEffect(() => {
        console.log('Estou sendo executado');
    });

    const [number, setNumber] = useState(1);

    const changeNumber = () => {
        setNumber(number + 1);
    }

    // 2 - Array dependencias vazio
    useEffect(() => {
        console.log('Serei executado apenas 1x');
    }, []);

    // 3 - item no array de dependências

    const [anotherNumber, setAnotherNumber] = useState(0);

    useEffect(() => {

        if(anotherNumber > 0) {
            console.log('Sou executado quando o another number muda!');
        }

    }, [anotherNumber]);

    // 4 - Cleanup 

    useEffect(() => {

    //     const timer = setTimeout(() => {

    //         console.log('Olá');

    //         setAnotherNumber(anotherNumber + 1);
            
    //     }, 2000);

    //    return () => clearTimeout(timer);

    }, [anotherNumber]);

  return (
    <div>
        <h2>useEffect</h2>
        <p>{number}</p>
        <button onClick={changeNumber}>Clique</button>
        <hr/>
        <p>Another nummber: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(anotherNumber + 1)} >Another</button>
    </div>
  )
}

export default HookUseEffect
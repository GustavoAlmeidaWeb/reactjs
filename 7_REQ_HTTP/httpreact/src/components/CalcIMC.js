/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState} from 'react';

const calcIMC = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [imc, setImc] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setImc(weight / (height * height));
    }

    useEffect(() => {

        if(!imc) return setMessage('Calcule para ver seu resultado');
        if(imc > 40) return setMessage('Obesidade grau III');
        if(imc >= 35) return setMessage('Obesidade grau II');
        if(imc >= 30) return setMessage('Obesidade grau I');
        if(imc >= 25) return setMessage('Sobrepeso');
        if(imc >= 18) return setMessage('Normal');
        if(imc <= 18.5) return setMessage('Magreza');

    }, [imc, message])

  return (
    <div>
        <h2>Calcule seu IMC</h2>
        <form onSubmit={handleSubmit}>
            <label> Peso
                <input type="text" value={weight || ''} onChange={(e) => setWeight(e.target.value)} required />
            </label>
            <label> Altura
                <input type="text" value={height || ''} onChange={(e) => setHeight(e.target.value)} required />
            </label>
            <input type="submit" value="Calcular" />
        </form>
        {!imc && <p>{message}</p>}
        {imc && <p>Seu resultado foi: {imc.toFixed(2)} - {message}</p>}
    </div>
  )
}

export default calcIMC
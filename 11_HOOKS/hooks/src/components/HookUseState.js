import { useState } from 'react';

const HookUseState = () => {

    // 1 - useState Básico

    let userName = 'João';
    const [name, setName] = useState('Gustavo');

    const changeNames = () => {

        userName = 'João Souza';
        setName('Gustavo Almeida');
    }

    // 2 - useState Input
    const [age, setAge] = useState(18);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(age);
    }

  return (
    <div>
        {/* 1 - useState */}
        <h2>useState</h2>
        <p>Variavel: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changeNames}>Mudar nomes</button>
        <hr />
        {/* 2 - useState e Input */}
        <p>Digite sua idade</p>
        <form onSubmit={handleSubmit}>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
            <input type="submit" value="Enviar" />
        </form>
        <p>Você tem {age} anos.</p>
        <hr />
    </div>
  )
}

export default HookUseState;
import { useState } from "react";

const ConditionalRender = () => {
    const [x] = useState(false);
    const [name, setName] = useState('Gustavo');
  return (
    <div>
        <h1>Isso vai aparecer</h1>
        {x && <p> Se x for TRUE esse também!</p>}
        {!x && <p> Agora X é Falso!</p>}
        <h1>If Ternário</h1>
        {name === 'João' ? (
            <div>
                <p>O nome é João!</p>
            </div>
        ) : (
            <div>
                <p>O nome NÃO é João.</p>
            </div>
        )}
        <button onClick={()=>setName('João')}>Clique Aqui</button>
    </div>
  )
}

export default ConditionalRender;
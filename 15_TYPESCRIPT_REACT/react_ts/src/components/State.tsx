import { useState, ChangeEvent } from 'react';

const State = () => {

    const [first, setfirst] = useState<string | null>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setfirst(e.target.value);
    }

  return (
    <div>
        <p>O texto: {first}</p>
        <input type="text" onChange={handleChange}/>
    </div>
  )
}

export default State;
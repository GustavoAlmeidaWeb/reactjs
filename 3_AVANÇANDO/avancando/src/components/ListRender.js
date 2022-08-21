import { useState } from "react";

const ListRender = () => {
    const [list] = useState(['Gustavo', 'Ana', 'Clair']);

    const [users, setUsers] = useState([
        {id: 1, name:'Gustavo', age: 33},
        {id: 2, name:'Ana', age: 25},
        {id: 3, name:'Clair', age: 60}
    ]);
    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);
        
        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        });
    }
  return (
    <div>
        <ul>
            {list.map((item, k) => (
                <li key={k}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user)=>(
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Deletar</button>
    </div>
  )
}

export default ListRender;
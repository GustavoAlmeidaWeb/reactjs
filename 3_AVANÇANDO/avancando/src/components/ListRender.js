import { useState } from "react";

const ListRender = () => {
    const [list] = useState(['Gustavo', 'Ana', 'Clair']);

    const [users] = useState([
        {id: 123, name:'Gustavo', age: 33},
        {id: 124, name:'Ana', age: 25},
        {id: 125, name:'Clair', age: 60}
    ])
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
    </div>
  )
}

export default ListRender;
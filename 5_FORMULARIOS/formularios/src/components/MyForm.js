import './MyForm.css';
import { useState } from 'react';

const MyForm = ({user}) => {
  // 6 - Controlled inputs
  // 3 - Gerenciamento de Dados
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [bio, setBio] = useState(user ? user.bio : '');

  const [role, setRole] = useState(user ? user.role : '');

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Enviando o form.');
    console.log(name, email, bio, role);

    // Validação
    // Envio

    // 7 - Resetando o form
    setName('');
    setEmail('');
    setBio('');
  }

  return (
    <div>
        {/* 1 - Criação do formulario */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text" name="name" placeholder="Digite seu nome" onChange={handleName} value={name}/>
            </div>
            {/* 2 - Label envolvendo input */}
            <label>
              <span>E-mail:</span>
              <input type="email" name="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} value={email}/>
            </label>

            {/* 8 - textarea */}
            <label>
              <span>Bio</span>
              <textarea name="bio" placeholder='Digite sua bio' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>

            {/* 9 - Select */}
            <label>
              <span>Função do Sistema</span>
              <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                <option value="user">Usuário</option>
                <option value="editor">Editor</option>
                <option value="admin">Administrador</option>
              </select>
            </label>

            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm
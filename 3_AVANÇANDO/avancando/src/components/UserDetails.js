
const UserDetails = ({nome, idade, profissao, cnh}) => {
  return (
    <div>
        <p>Nome: {nome}</p>
        <p>Idade: {idade}</p>
        <p>Profissão: {profissao}</p>
        <p>{cnh && <strong>Pode tirar CNH</strong>}</p>
        <hr />
    </div>
  )
}

export default UserDetails;
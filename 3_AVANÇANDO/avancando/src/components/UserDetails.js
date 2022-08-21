
const UserDetails = ({nome, idade, profissao}) => {
  return (
    <div>
        <h2>{nome}</h2>
        <p>Idade: {idade}</p>
        <p>Profissão: {profissao}</p>
        {idade >= 18 ? (<p>Pode Tirar a CNH</p>) : (<p>Menor de idade</p>)}
        <hr />
    </div>
  )
}

export default UserDetails;

const Challenge = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);

    const soma = () => {
        console.log(num1 + num2);
    }
  return (
    <div>
        <p>O primeiro numero sorteado foi: {num1}</p>
        <p>O Segundo numero sorteado foi: {num2}</p>
        <button onClick={soma}>Realize a soma</button>
    </div>
  )
}

export default Challenge;
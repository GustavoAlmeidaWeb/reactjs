import Destructuring from "./components/Destructuring";
import FirstComponent from "./components/firstComponent";
import SecondComponent from "./components/SecondComponent";
import State from "./components/State";

function App() {

  // 1 - variáveis
  const name: string = 'Gustavo';
  const age: number = 33;
  const working: boolean = true;

  // 2 - funções
  const userGreeting = (name: string): string => {
    return `Olá ${name}!`;
  }

  return (
    <div className="App">
      <h1>TypeScript com React</h1>
      <p>Nome: {name}</p>
      <p>Idade: {age}</p>
      {working && <p>Está trabalhando</p>}
      <p>{userGreeting(name)}</p>
      <FirstComponent/>
      <SecondComponent name={name} />
      <Destructuring title='Post 1' commentQty={5} content='Ola, tudo bem' tags={["ts", "js", "react"]} />
      <State />
    </div>
  );
}

export default App;

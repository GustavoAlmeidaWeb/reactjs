import { createContext } from "react";
import Context from "./components/Context";
import Destructuring, { Category} from "./components/Destructuring";
import FirstComponent from "./components/firstComponent";
import SecondComponent from "./components/SecondComponent";
import State from "./components/State";

// Type
type textOrNull = string | null;

// Context
interface IAppContent {
  language: string,
  framework: string,
  projects: number,
}

export const AppContext = createContext<IAppContent | null>(null);

function App() {

  // 1 - variáveis
  const name: string = 'Gustavo';
  const age: number = 33;
  const working: boolean = true;

  // 2 - funções
  const userGreeting = (name: string): string => {
    return `Olá ${name}!`;
  }

  // Type
  const myText:textOrNull = 'Tem texto aqui...';
  let myText2:textOrNull = null;

  myText2 = 'Opa';

  // Context
  const contextValue:IAppContent = {
    language: 'Javascript',
    framework: 'Express',
    projects: 5,
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>TypeScript com React</h1>
        <p>Nome: {name}</p>
        <p>Idade: {age}</p>
        {working && <p>Está trabalhando</p>}
        <p>{userGreeting(name)}</p>
        <FirstComponent/>
        <SecondComponent name={name} />
        <Destructuring  category={Category.TS} title='Typescript' commentQty={5} content='Ola, tudo bem' tags={["ts", "js", "react"]} />
        <Destructuring  category={Category.PY} title='Python' commentQty={5} content='Ola, tudo bem' tags={["python"]} />
        <State />
        {myText && <p>Tem texto na variavel</p>}
        {myText2 && <p>Tem texto na variavel</p>}
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;

// useContext
import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";

import HookUseReducer from "../components/HookUseReducer";
import HookUseState from "../components/HookUseState";
import HookUseEffect from "../components/HookUseEffect";
import HookUseRef from "../components/HookUseRef";
import HookUseCallback from "../components/HookUseCallback";
import HookUseMemo from "../components/HookUseMemo";
import HookUseImperativeHandle from "../components/HookUseImperativeHandle";
import HookCustom from "../components/HookCustom";

const Home = () => {

  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <h2>useContext</h2>
      <p>Valor do Contexto: {contextValue}</p>
      <HookUseRef />
      <HookUseCallback />
      <HookUseMemo />
      <HookUseImperativeHandle />
      <HookCustom />
    </div>
  )
}

export default Home;
import HookUseEffect from "../components/HookUseEffect";
import HookUseReducer from "../components/HookUseReducer";
import HookUseState from "../components/HookUseState";

// useContext
import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";
import HookUseRef from "../components/HookUseRef";

const Home = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <HookUseState />
      <hr />
      <HookUseReducer />
      <hr />
      <HookUseEffect />
      <hr />
      <h2>useContext</h2>
      <p>Valor do contexto: {contextValue}</p>
      <hr />
      <HookUseRef />
    </div>
  );
};

export default Home;

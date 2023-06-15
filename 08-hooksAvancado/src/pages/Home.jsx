// useContext
import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";

// Hooks
import HookUseEffect from "../components/HookUseEffect";
import HookUseReducer from "../components/HookUseReducer";
import HookUseState from "../components/HookUseState";
import HookUseRef from "../components/HookUseRef";
import HookUseCallBack from "../components/HookUseCallBack";
import HookUseMemo from "../components/HookUseMemo";
import HookUseLayoutEffect from "../components/HookUseLayoutEffect";
import HookUseImperativeHandle from "../components/HookUseImperativeHandle";
import HookCustom from "../components/HookCustom";

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
      <hr />
      <HookUseCallBack />
      <hr />
      <HookUseMemo />
      <hr />
      <HookUseLayoutEffect />
      <hr />
      <HookUseImperativeHandle />
      <hr />
      <HookCustom />
      <hr />
    </div>
  );
};

export default Home;

// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../context/ChangeCounter";

// 4 - refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

// 5 - Context mais complexo

const Home = () => {
  //  const { counter } = useContext(CounterContext);

  const { counter } = useCounterContext();

  // 5 - Context mais complexo
  const { color } = useTitleColorContext();
  console.log(color);
  return (
    <div>
      <h1 style={{ color }}>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3  - alterando valor contexto */}
      <ChangeCounter />
    </div>
  );
};

export default Home;

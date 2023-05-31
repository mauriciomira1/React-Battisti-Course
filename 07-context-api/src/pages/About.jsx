import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../context/ChangeCounter";

const About = () => {
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <div>
      <h1>About</h1>
      <p>Valor: {counter}</p>
      <ChangeCounter />
    </div>
  );
};

export default About;

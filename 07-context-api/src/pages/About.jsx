import ChangeCounter from "../context/ChangeCounter";
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const About = () => {
  const { counter } = useCounterContext();

  const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color }}>About</h1>
      <p>Valor: {counter}</p>
      <ChangeCounter />
    </div>
  );
};

export default About;

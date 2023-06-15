import { useState } from "react";
import { usePrevious } from "../hooks/usePrevious";

const HookCustom = () => {
  const [number, setNumber] = useState(0);
  const previousValue = usePrevious(number);

  return (
    <div>
      <h2>Custom Hook</h2>
      <p>Atual: {number}</p>
      <p>Previous value: {previousValue}</p>
      <button onClick={() => setNumber(Math.random())}>Alterar</button>
    </div>
  );
};

export default HookCustom;

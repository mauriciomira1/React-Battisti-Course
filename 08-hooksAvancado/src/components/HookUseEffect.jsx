import { useEffect, useState } from "react";

const HookUseEffect = () => {
  // 1 - useEffect sem dependências
  useEffect(() => {
    console.log("Estou sendo executado");
  });

  const [number, setNumber] = useState(1);
  const changeSomething = () => {
    setNumber(number + 1);
  };

  //2 - array de dependências vazio: o useEffect só executa uma vez
  useEffect(() => {
    console.log("Serei executado só uma vez!");
  }, []);

  //3 - item no array de dependências
  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    if (anotherNumber > 0) console.log("O anothernumber mudou");
  }, [anotherNumber]);

  //4 - cleanup do useEffect
  useEffect(() => {
    /*     const timer = setTimeout(() => {
      console.log("Hello World");
      //setAnotherNumber(anotherNumber + 1);
    }, 2000);

    return () => clearTimeout(timer); */
  }, [anotherNumber]);

  return (
    <div>
      <h2>useEffect</h2>
      <p>Número: {number}</p>
      <button onClick={changeSomething}>Clique</button>
      <p>Another number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        Mude o another
      </button>
    </div>
  );
};

export default HookUseEffect;

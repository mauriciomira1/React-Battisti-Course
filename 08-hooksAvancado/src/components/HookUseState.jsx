import { useState } from "react";

const HookUseState = () => {
  // 1 - useState
  let userName = "João";
  const [name, setName] = useState("Maurício");

  const changeNames = () => {
    userName = "Maria";
    setName("Cissy");
  };

  // 2 - useState e input
  const [age, setAge] = useState(18);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    // envio a uma API
    console.log(age); // simulando o envio
  };

  return (
    <div>
      {/* 1 - useState */}
      <h2>useState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar nome</button>

      {/* 2 - useState e input */}
      <form onSubmit={handleSubmit}>
        <p>Digite a sua idade:</p>
        <input
          type="text"
          value={age}
          onChange={(ev) => setAge(ev.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
      <p>Você tem {age} anos</p>
    </div>
  );
};

export default HookUseState;

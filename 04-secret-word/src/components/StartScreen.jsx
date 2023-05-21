/* eslint-disable react/prop-types */
import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para jogar</p>
      <button onClick={startGame}>COMEÇAR</button>
    </div>
  );
};

export default StartScreen;

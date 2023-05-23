import "./StartScreen.css";

// eslint-disable-next-line react/prop-types
const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para jogar</p>
      <button onClick={startGame}>COMEÇAR O JOGO</button>
    </div>
  );
};

export default StartScreen;

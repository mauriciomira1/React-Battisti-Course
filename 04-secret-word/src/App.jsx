/* eslint-disable no-unused-vars */
// CSS
import "./App.css";

// React
import { useCallback, useEffect, useState } from "react";

// Data
import { wordsList } from "./data/words.jsx";

// Components
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  // Starts the secret word game
  const StartGame = () => {
    setGameStage(stages[1].name);
  };

  //

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={StartGame} />}
      {gameStage === "game" && <Game startGame={StartGame} />}
      {gameStage === "end" && <GameOver startGame={StartGame} />}
    </div>
  );
}

export default App;

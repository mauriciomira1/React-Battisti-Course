// CSS
import "./App.css";

// React
import { useCallback, useEffect, useState, useRef } from "react";

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

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState("");

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = () => {
    // pick a random category
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];
    console.log(category);

    // pick a random word
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];
    console.log(word);

    return { word, category };
  };

  // Starts the secret word game
  const StartGame = () => {
    // Pick word and pick category
    const { word, category } = pickWordAndCategory();

    // create an array of letters
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((letra) => letra.toLowerCase());
    console.log(wordLetters);

    // fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  };

  // process the letter input
  const verifyLetter = (letter) => {
    const normalizeLetter = letter.toLowerCase();

    // check if the letter has already been used
    if (
      guessedLetters.includes(normalizeLetter) ||
      wrongLetters.includes(normalizeLetter)
    ) {
      return;
    }

    // push guessed letter or remove a guess
    if (letters.includes(normalizeLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizeLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizeLetter,
      ]);
      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  useEffect(() => {
    if (guesses <= 0) {
      // reset all states

      setGameStage(stages[2].name);
    }
  }, [guesses]);

  // retry the game
  const retry = () => {
    setGameStage(stages[1].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={StartGame} />}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          startGame={StartGame}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && <GameOver startGame={StartGame} retry={retry} />}
    </div>
  );
}

export default App;

// CSS
import './App.css';

// React
import { useCallback, useEffect, useState } from 'react';

// Data
import { wordsList } from './data/words';

// Components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  { id: 1, name: 'start'},
  { id: 2, name: 'game'},
  { id: 3, name: 'end'},
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState();
  const [pickedCat, setPickedCat] = useState();
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const pickWordandCat = () => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    const word = words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  }

  // Start do jogo
  const startGame = () => {
    
    // Pega palavra e categoria
    const { word, category } = pickWordandCat();

    // Separação da Palavra por letras
    let wordLetters = word.split('');
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    setPickedWord(word);
    setPickedCat(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  }

  // Processa a letra teclada
  const verifyLetter = (letter) => {
    console.log(letter);
  }

  // Restart game
  const retry = () => {
    setGameStage(stages[0].name);
  }
  
  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && (
        <Game 
          verifyLetter={verifyLetter}
          pickedCat={pickedCat}
          pickedWord={pickedWord}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === 'end' && <GameOver retry={retry}/>}
    </div>
  );
}

export default App;

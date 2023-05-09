import React, { useState } from 'react';
import GameSettings from './components/GameSettings';
import Game from './components/Game';
import { GridContext } from './context';
import { cards } from './cards';
import './App.css';

function App() {
  const [gameSettings, setGameSettings] = useState(true);
  const [gridSize, setGridSize] = useState('4');

  // The Fisher-Yates algorithm
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) { 
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  // trim array to be the length of grid size
  const CARDS = shuffleArray(cards.slice(0, gridSize ** 2));

  if (gameSettings) {
    return (
      <GridContext.Provider value={{gridSize, setGridSize}}>
        <GameSettings setGameSettings={setGameSettings} />
      </GridContext.Provider>
    )
  }

  return (
    <div className="App">
      <Game cards={CARDS} setGameSettings={setGameSettings} />
    </div>
  );
}

export default App;
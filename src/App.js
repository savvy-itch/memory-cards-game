import React, { useState } from 'react';
import GameSettings from './components/GameSettings';
import Game from './components/Game';
import { GridContext } from './context';
import './App.css';

function App() {
  const [gameSettings, setGameSettings] = useState(true);
  const [gridSize, setGridSize] = useState('4');

  if (gameSettings) {
    return (
      <GridContext.Provider value={{gridSize, setGridSize}}>
        <GameSettings setGameSettings={setGameSettings} />
      </GridContext.Provider>
    )
  }

  return (
    <GridContext.Provider value={{gridSize, setGridSize}}>
      <div className="App">
        <Game />
      </div>
    </GridContext.Provider>
  );
}

export default App;
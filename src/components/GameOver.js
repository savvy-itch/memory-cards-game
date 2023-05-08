import React from 'react';
import './GameOver.css';

export default function GameOver({ moves, score, setGameSettings }) {
  function handleClick() {
    setGameSettings(true);
  }

  return (
    <div className="game-over-container">
      <h1>Congratulations!</h1>
      <h2>Your Results:</h2>
      <div className="game-results">
        <p>Moves: {moves}</p>
        <p>Score: {score}</p>
      </div>
      <button type="button" className="play-again-btn" onClick={handleClick}>Play Again</button>
    </div>
  )
}

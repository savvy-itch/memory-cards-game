import React, { useContext } from 'react';
import './GameSettings.css';
import { GridContext } from '../context';

export default function GameSettings({ setGameSettings }) {
  const {setGridSize} = useContext(GridContext);

  function handleSubmit() {
    setGameSettings(false);
  }

  function handleInputChange(e) {
    setGridSize(e.target.value);
  }

  return (
    <div className="game-settings">
      <h1>Memory Cards Game</h1>
      <p>Select grid size:</p>
      <form className="grid-size">
        <input id="4x4-size" type="radio" name="grid-size" value="4" defaultChecked onChange={handleInputChange} />
        <label htmlFor="4x4-size">4x4</label>
        <input id="6x6-size" type="radio" name="grid-size" value="6" onChange={handleInputChange} />
        <label htmlFor="6x6-size">6x6</label>
        <input id="8x8-size" type="radio" name="grid-size" value="8" onChange={handleInputChange} />
        <label htmlFor="8x8-size">8x8</label>
      </form>
      <button className="start-btn" type="button" onClick={handleSubmit}>start game</button>
    </div>
  )
}
import React, { useEffect, useState, useRef } from 'react';
import Card from './Card';
import GameOver from './GameOver';
import './Game.css';

export default function Game({ cards, setGameSettings }) {
  const [flippedCard, setFlippedCard] = useState(null);
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [currentPair, setCurrentPair] = useState([]);
  const [openCards, setOpenCards] = useState([]);
  const moves = useRef(0);
  const score = useRef(0);

  let gridClass;
  switch (cards.length) {
    case 16:
      gridClass = 'col-4';
      break;
    case 36:
      gridClass = 'col-6';
      break;
    case 64:
      gridClass = 'col-8';
      break;
    default:
      gridClass = 'col-4';
  }

  function handleClick(e) {
    // prevent clicking twice on the same card
    if (currentPair.includes(e.currentTarget)) {
      return;
    }

    setIsCardFlipped(true);
    setFlippedCard(e.currentTarget);
    e.currentTarget.classList.add('flip-card');
    
    // if it's the first clicked card
    if (currentPair.length === 0) {
      setCurrentPair([e.currentTarget]);
    } 
    // if it's the second clicked card
    else if (currentPair.length === 1) {
      setCurrentPair([...currentPair, e.currentTarget]);
      // update moves count
      moves.current = moves.current + 1;
    } 
    // if it's a new clicked card
    else {
      setCurrentPair([e.currentTarget]);
    }
  }

  function checkPair() {
    // if it's a matching pair
    if (currentPair[0].dataset.pair === currentPair[1].dataset.pair) {
      setOpenCards([...openCards, ...currentPair]);
      // update score
      score.current = score.current + 1;
      setTimeout(() => {
        currentPair[0].classList.add('right-card');
        currentPair[1].classList.add('right-card');
      }, 300);
      setTimeout(() => {
        currentPair[0].classList.remove('right-card');
        currentPair[1].classList.remove('right-card');
      }, 1000)
    }
    // if the pair doesn't match
    else {
      setTimeout(() => {
        currentPair[0].classList.add('wrong-card');
        currentPair[1].classList.add('wrong-card');
        currentPair[0].classList.remove('flip-card');
        currentPair[1].classList.remove('flip-card');
      }, 750);
      setTimeout(() => {
        currentPair[0].classList.remove('wrong-card');
        currentPair[1].classList.remove('wrong-card');
      }, 1000)
    }
    setCurrentPair([]);
  }

  useEffect(() => {
    if (currentPair.length === 2) {
      checkPair();
    }
  }, [currentPair]);

  if (openCards.length === cards.length) {
    return <GameOver moves={moves.current} score={score.current} setGameSettings={setGameSettings} />
  }

  return (
    <div className="container">
      <div className="game-stats">
        <div className="game-moves">Moves: {moves.current}</div>
        <div className="game-score">Score: {score.current}</div>
      </div>
      <div className={`cards-grid ${gridClass}`}>
        {cards.map((card, index) => {
          return <Card key={index} 
            card={card}
            onClick={handleClick}
            openCards={openCards}
          />
        })}
      </div>
    </div>
  )
}
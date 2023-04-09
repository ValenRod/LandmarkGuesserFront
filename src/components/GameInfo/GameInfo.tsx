import React from 'react';
import './GameInfo.css';
import {useGameContext} from '../../hooks/useGameContext';

export const GameInfo = () => {
  const {gameParams} = useGameContext();
  const {currentRound, totalPoints} = gameParams;

  return (
    <div className="game-info">
      <p className="round">
        Round <span>{currentRound} / 5</span>
      </p>
      <p className="score">
        Score <span>{totalPoints}</span>
      </p>
    </div>
  );
};

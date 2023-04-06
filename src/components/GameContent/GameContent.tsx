import React from 'react';
import './GameContent.css';
import {Round} from '../Round/Round';
import {useGameContext} from '../../hooks/useGameContext';
import {Summary} from '../Summary/Summary';

export const GameContent = () => {
  const {gameParams} = useGameContext();
  const {rounds} = gameParams;

  return (
    <div className="game-content">
      {!rounds[rounds.length - 1].points ? <Round /> : <Summary />}
    </div>
  );
};

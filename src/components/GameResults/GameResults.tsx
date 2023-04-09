import React from 'react';
import './GameResults.css';
import {useGameContext} from '../../hooks/useGameContext';
import {distanceInKm} from '../../utils/distanceInKm';

export const GameResults = () => {
  const {gameParams} = useGameContext();
  const {rounds} = gameParams;

  return (
    <div className="game-results">
      {rounds.map((round, index) => (
        <div className="game-result" key={index}>
          <p>Round {round.roundNumber}</p>
          <p>{round.points} pts</p>
          <p>{round.distance ? distanceInKm(round.distance) : null} km</p>
        </div>
      ))}
    </div>
  );
};

import React from 'react';
import './RoundResults.css';
import {distanceInKm} from '../../utils/distanceInKm';
import {useGameContext} from '../../hooks/useGameContext';

export const RoundResults = () => {
  const {gameParams} = useGameContext();
  const {rounds} = gameParams;
  const {distance} = rounds[rounds.length - 1];

  return (
    <div className="round-results">
      <p className={'distance'}>
        Your guess was
        <span>{distance ? distanceInKm(distance) : null} km</span>
        from the correct location.
      </p>
    </div>
  );
};

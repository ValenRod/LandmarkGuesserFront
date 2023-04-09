import React from 'react';
import './PointsBar.css';
import {usePointsBarStyle} from '../../hooks/usePointsBarStyle';
import {useGameContext} from '../../hooks/useGameContext';

export const PointsBar = () => {
  const {gameParams, showGameSummary} = useGameContext();
  const {rounds, totalPoints} = gameParams;
  const points = rounds[rounds.length - 1].points ?? 0;
  const {pointsBarStyle} = usePointsBarStyle({
    points: showGameSummary ? totalPoints : points,
    maxPoints: showGameSummary ? 5000 : 1000,
  });

  return (
    <div className="points-bar">
      <p>{showGameSummary ? totalPoints : points} points</p>
      <div className="bg-bar">
        <div className="color-bar" style={pointsBarStyle}></div>
      </div>
    </div>
  );
};

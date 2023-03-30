import React from 'react';
import './GameInfo.css';

export const GameInfo = () => {
  return (
    <div className="game-info">
      <p className="round">
        Round <span>1 / 5</span>
      </p>
      <p className="score">
        Score <span>0</span>
      </p>
    </div>
  );
};

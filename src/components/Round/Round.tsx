import React from 'react';
import './Round.css';
import {GameInfo} from '../GameInfo/GameInfo';
import {MapBar} from '../MapBar/MapBar';
import {Landmark} from '../Landmark/Landmark';

export const Round = () => {
  return (
    <div className="round">
      <GameInfo />
      <Landmark />
      <MapBar />
    </div>
  );
};

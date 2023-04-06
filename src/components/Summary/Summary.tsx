import React from 'react';
import './Summary.css';
import {RoundResults} from '../RoundResults/RoundResults';
import {Map} from '../common/Map/Map';
import {useGameContext} from '../../hooks/useGameContext';
import {useMarkersData} from '../../hooks/useMarkersData';

export const Summary = () => {
  const {gameParams} = useGameContext();
  const {rounds} = gameParams;
  const {markersData} = useMarkersData({rounds});

  return (
    <div className="summary">
      <Map markersData={markersData} />
      <RoundResults />
    </div>
  );
};

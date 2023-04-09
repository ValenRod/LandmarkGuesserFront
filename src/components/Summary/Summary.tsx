import React from 'react';
import './Summary.css';
import {Map} from '../common/Map/Map';
import {Results} from '../Results/Results';
export const Summary = () => {
  return (
    <div className="summary">
      <Map />
      <Results />
    </div>
  );
};

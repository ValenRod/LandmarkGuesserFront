import React from 'react';
import './Landmark.css';
import {useGameContext} from '../../hooks/useGameContext';
import {useFetchErrorContext} from '../../hooks/useFetchErrorContext';
import {useLandmarkImgSrc} from '../../hooks/useLandmarkImgSrc';

export const Landmark = () => {
  const {gameParams} = useGameContext();
  const {rounds} = gameParams;
  const {url} = rounds[rounds.length - 1].landmark;
  const {setFetchErrorState} = useFetchErrorContext();
  const {landmarkImgSrc} = useLandmarkImgSrc({
    url,
    setFetchErrorState,
  });

  return (
    <div className="landmark">
      {landmarkImgSrc ? (
        <img src={landmarkImgSrc} alt="landmark image" />
      ) : null}
    </div>
  );
};

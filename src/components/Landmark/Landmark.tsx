import React, {useEffect, useState} from 'react';
import './Landmark.css';
import {getLandmark} from '../../utils/getLandmark';
import {useGameContext} from '../../hooks/useGameContext';
import {useFetchErrorContext} from '../../hooks/useFetchErrorContext';

export const Landmark = () => {
  const [landmarkImgSrc, setLandmarkImgSrc] = useState<string | null>(null);
  const {setFetchErrorState} = useFetchErrorContext();
  const {gameParams} = useGameContext();
  const {url} = gameParams.rounds[gameParams.currentRound - 1].landmark;

  useEffect(() => {
    (async () => {
      await getLandmark({
        url,
        setLandmarkImgSrc,
        setFetchErrorState,
      });
    })();
  });

  return (
    <div className="landmark">
      {landmarkImgSrc ? (
        <img src={landmarkImgSrc} alt="landmark image" />
      ) : null}
    </div>
  );
};

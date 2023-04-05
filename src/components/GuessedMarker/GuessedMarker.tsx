import React from 'react';
import {useGameContext} from '../../hooks/useGameContext';
import {Marker, useMapEvents} from 'react-leaflet';

export const GuessedMarker = () => {
  const {guessedMarkerPosition, setGuessedMarkerPosition} = useGameContext();

  useMapEvents({
    click(e) {
      setGuessedMarkerPosition({...e.latlng});
    },
  });

  return guessedMarkerPosition ? (
    <Marker position={guessedMarkerPosition} />
  ) : null;
};

import React from 'react';
import {useGameContext} from '../../hooks/useGameContext';
import {Marker, useMapEvents} from 'react-leaflet';
import {useMarkerIcon} from '../../hooks/useMarkerIcon';
import guessedMarkerIconUrl from '../../icons/avatar-svgrepo-com.svg';

export const GuessedMarker = () => {
  const {guessedMarkerPosition, setGuessedMarkerPosition} = useGameContext();
  const guessedMarkerIcon = useMarkerIcon({iconUrl: guessedMarkerIconUrl});

  useMapEvents({
    click(e) {
      setGuessedMarkerPosition({...e.latlng});
    },
  });

  return guessedMarkerPosition ? (
    <Marker
      position={guessedMarkerPosition}
      icon={guessedMarkerIcon.markerIcon}
    />
  ) : null;
};

import {useState} from 'react';
import {Coordinates} from 'types';

export const useGuessedMarkerPosition = () => {
  const [guessedMarkerPosition, setGuessedMarkerPosition] =
    useState<Coordinates | null>(null);
  return {guessedMarkerPosition, setGuessedMarkerPosition};
};

import {useEffect, useState} from 'react';
import {RoundParams} from 'types';
import {MarkersDataObj} from '../components/MarkersContainer/MarkersContainer';

interface Props {
  rounds: RoundParams[];
  showGameSummary: boolean;
}

export const useMarkersData = (props: Props) => {
  const [markersData, setMarkersData] = useState<MarkersDataObj[] | null>(null);
  const {rounds, showGameSummary} = props;

  useEffect(() => {
    const markers: MarkersDataObj[] = [];
    for (const round of rounds) {
      const {landmark, playerGuessLat, playerGuessLng, roundNumber} = round;
      if (
        playerGuessLat &&
        playerGuessLng &&
        landmark.lat &&
        landmark.lng &&
        (showGameSummary ||
          rounds.length === 1 ||
          roundNumber === rounds.length)
      ) {
        const landmarkMarker = {
          lat: landmark.lat,
          lng: landmark.lng,
        };
        const playerMarker = {
          lat: playerGuessLat,
          lng: playerGuessLng,
        };
        markers.push({landmarkMarker, playerMarker});
      }
    }
    setMarkersData(markers);
  }, [showGameSummary]);
  return {markersData};
};

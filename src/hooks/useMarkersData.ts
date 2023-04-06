import {useEffect, useState} from 'react';
import {RoundParams} from 'types';
import {MarkersDataObj} from '../components/MarkersContainer/MarkersContainer';

interface Props {
  rounds: RoundParams[];
}

export const useMarkersData = (props: Props) => {
  const [markersData, setMarkersData] = useState<MarkersDataObj[] | null>(null);
  const {rounds} = props;

  useEffect(() => {
    const markers: MarkersDataObj[] = [];
    for (const round of rounds) {
      const {landmark} = round;
      if (
        round.playerGuessLat &&
        round.playerGuessLng &&
        landmark.lat &&
        landmark.lng
      ) {
        const landmarkMarker = {
          lat: landmark.lat,
          lng: landmark.lng,
        };
        const playerMarker = {
          lat: round.playerGuessLat,
          lng: round.playerGuessLng,
        };
        markers.push({landmarkMarker, playerMarker});
        setMarkersData(markers);
      }
    }
  }, []);
  return {markersData};
};

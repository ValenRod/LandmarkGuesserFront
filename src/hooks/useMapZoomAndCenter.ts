import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {Coordinates} from 'types';
import {distanceInKm} from '../utils/distanceInKm';

const defaultZoom = 1;
const defaultCenter: Coordinates = {
  lat: 0,
  lng: 0,
};

interface Props {
  lat: number | null;
  lng: number | null;
  distance: number | null;
  showGameSummary: boolean;
  setReloadMap: Dispatch<SetStateAction<boolean>>;
}

export const useMapZoomAndCenter = (props: Props) => {
  const {lat, lng, distance, showGameSummary, setReloadMap} = props;
  const [mapZoomLevel, setMapZoomLevel] = useState<number>(defaultZoom);
  const [mapCenter, setMapCenter] = useState<Coordinates>(defaultCenter);

  useEffect(() => {
    if (lat && lng && distance && !showGameSummary) {
      const landmarkPosition = {
        lat,
        lng,
      };
      const calculateMapZoomLvl = () => {
        const maxZoomLvl = 13;
        let exponent = 0;
        let zoomLvl = maxZoomLvl;
        do {
          if (distanceInKm(distance) <= Math.pow(2, exponent)) {
            return zoomLvl;
          }
          zoomLvl--;
          exponent++;
        } while (zoomLvl > 1);
        return zoomLvl;
      };

      setMapZoomLevel(calculateMapZoomLvl());
      setMapCenter(landmarkPosition);
    } else {
      setMapZoomLevel(defaultZoom);
      setMapCenter(defaultCenter);
    }
    setReloadMap(true);
  }, [showGameSummary]);

  return {mapZoomLevel, mapCenter};
};

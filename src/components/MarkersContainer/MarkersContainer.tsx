import React from 'react';
import {Marker, Polyline} from 'react-leaflet';
import {Coordinates} from 'types';
import {useMarkerIcon} from '../../hooks/useMarkerIcon';
import landmarkMarkerIconUrl from '../../icons/flag-svgrepo-com.svg';
import playerMarkerIconUrl from '../../icons/avatar-svgrepo-com.svg';

export interface MarkersDataObj {
  landmarkMarker: Coordinates;
  playerMarker: Coordinates;
}

interface Props {
  markers: MarkersDataObj;
}

export const MarkersContainer = (props: Props) => {
  const landmarkMarkerIcon = useMarkerIcon({iconUrl: landmarkMarkerIconUrl});
  const playerMarkerIcon = useMarkerIcon({iconUrl: playerMarkerIconUrl});
  const {markers} = props;

  return (
    <div className="markers-container">
      <Marker
        position={markers.landmarkMarker}
        icon={landmarkMarkerIcon.markerIcon}
      />
      <Polyline
        positions={[markers.landmarkMarker, markers.playerMarker]}
        dashArray={[1, 6]}
        weight={3}
        color={'black'}
      />
      <Marker
        position={markers.playerMarker}
        icon={playerMarkerIcon.markerIcon}
      />
    </div>
  );
};

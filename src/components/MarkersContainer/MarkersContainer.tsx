import React from 'react';
import {Marker, Polyline} from 'react-leaflet';
import {Coordinates} from 'types';

export interface MarkersDataObj {
  landmarkMarker: Coordinates;
  playerMarker: Coordinates;
}

interface Props {
  markers: MarkersDataObj;
}

export const MarkersContainer = (props: Props) => {
  const {markers} = props;
  return (
    <div className="markers-container">
      <Marker position={markers.landmarkMarker} />
      <Polyline
        positions={[markers.landmarkMarker, markers.playerMarker]}
        dashArray={[1, 6]}
        weight={3}
        color={'black'}
      />
      <Marker position={markers.playerMarker} />
    </div>
  );
};

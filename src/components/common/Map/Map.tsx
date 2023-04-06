import React from 'react';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import {MapContainer, TileLayer} from 'react-leaflet';
import {GuessedMarker} from '../../GuessedMarker/GuessedMarker';
import {
  MarkersContainer,
  MarkersDataObj,
} from '../../MarkersContainer/MarkersContainer';

interface Props {
  markersData?: MarkersDataObj[] | null;
}

export const Map = (props: Props) => {
  const {markersData} = props;
  const defaultZoom = 1;
  const defaultCenter = {
    lat: 0,
    lng: 0,
  };

  return (
    <div className="map">
      <MapContainer center={defaultCenter} zoom={defaultZoom}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {!markersData ? (
          <GuessedMarker />
        ) : (
          markersData.map((markers, index) => (
            <MarkersContainer markers={markers} key={index} />
          ))
        )}
      </MapContainer>
    </div>
  );
};

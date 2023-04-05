import React from 'react';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import {MapContainer, TileLayer} from 'react-leaflet';
import {GuessedMarker} from '../../GuessedMarker/GuessedMarker';

export const Map = () => {
  const defaultCenter = {
    lat: 0,
    lng: 0,
  };
  const defaultZoom = 1;

  return (
    <div className="map">
      <MapContainer center={defaultCenter} zoom={defaultZoom}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GuessedMarker />
      </MapContainer>
    </div>
  );
};

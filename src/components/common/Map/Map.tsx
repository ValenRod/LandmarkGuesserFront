import React from 'react';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import {MapContainer, TileLayer} from 'react-leaflet';
import {GuessedMarker} from '../../GuessedMarker/GuessedMarker';
import {MarkersContainer} from '../../MarkersContainer/MarkersContainer';
import {useGameContext} from '../../../hooks/useGameContext';
import {useMarkersData} from '../../../hooks/useMarkersData';
import {useMapZoomAndCenter} from '../../../hooks/useMapZoomAndCenter';
import {useMapReload} from '../../../hooks/useMapReload';

export const Map = () => {
  const {loadMap, setReloadMap} = useMapReload();
  const {gameParams, showGameSummary} = useGameContext();
  const {rounds} = gameParams;
  const {landmark, distance} = rounds[rounds.length - 1];
  const {markersData} = useMarkersData({rounds, showGameSummary});
  const {mapCenter, mapZoomLevel} = useMapZoomAndCenter({
    lat: landmark.lat,
    lng: landmark.lng,
    distance,
    showGameSummary,
    setReloadMap,
  });

  return (
    <div className="map">
      {loadMap ? (
        <MapContainer center={mapCenter} zoom={mapZoomLevel}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {!markersData?.length ? (
            <GuessedMarker />
          ) : (
            markersData.map((markers, index) => (
              <MarkersContainer markers={markers} key={index} />
            ))
          )}
        </MapContainer>
      ) : null}
    </div>
  );
};

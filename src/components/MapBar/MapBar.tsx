import React, {useState} from 'react';
import './MapBar.css';
import {Btn} from '../common/Btn/Btn';
import {Map} from '../common/Map/Map';
import {FiMap, FiX} from 'react-icons/fi';
import {useGameContext} from '../../hooks/useGameContext';

export const MapBar = () => {
  const [show, setShow] = useState(false);
  const {guessedMarkerPosition, setSendGuessedMarkerPosition} =
    useGameContext();

  const toggleMap = () => {
    setShow(!show);
  };

  return (
    <div className={`map-bar ${show ? '' : 'hidden'}`}>
      <Map />
      <Btn
        className={`circle ${show ? 'hidden' : ''}`}
        id={'show-map-btn'}
        action={toggleMap}
        content={<FiMap />}
      />
      <Btn
        className={'circle'}
        id={'hide-map-btn'}
        action={toggleMap}
        content={<FiX />}
      />
      <Btn
        id={'send-btn'}
        content={guessedMarkerPosition ? 'Send' : 'Guess'}
        disabled={!guessedMarkerPosition}
        action={() => setSendGuessedMarkerPosition(true)}
      />
    </div>
  );
};

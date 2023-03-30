import React, {useState} from 'react';
import './MapBar.css';
import {Btn} from '../common/Btn/Btn';
import {Map} from '../common/Map/Map';
import {FiMap, FiX} from 'react-icons/fi';

export const MapBar = () => {
  const [show, setShow] = useState(false);

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
        className={'disabled'}
        id={'send-btn'}
        content={'Send'}
        action={() => null}
      />
    </div>
  );
};

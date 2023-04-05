import React, {useState} from 'react';
import './MapBar.css';
import {Btn} from '../common/Btn/Btn';
import {Map} from '../common/Map/Map';
import {FiMap, FiX} from 'react-icons/fi';
import {useGameContext} from '../../hooks/useGameContext';
import {sendGuessedMarkerPosition} from '../../utils/sendGuessedMarkerPosition';
import {useFetchErrorContext} from '../../hooks/useFetchErrorContext';
import {useParams} from 'react-router-dom';

export const MapBar = () => {
  const [show, setShow] = useState(false);
  const {guessedMarkerPosition, setGuessedMarkerPosition, setLoadGame} =
    useGameContext();
  const {setFetchErrorState} = useFetchErrorContext();
  const gameId = useParams().id ?? '';

  const sendBtnAction = async () => {
    await sendGuessedMarkerPosition({
      gameId,
      guessedMarkerPosition,
      setGuessedMarkerPosition,
      setLoadGame,
      setFetchErrorState,
    });
  };

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
        action={sendBtnAction}
      />
    </div>
  );
};

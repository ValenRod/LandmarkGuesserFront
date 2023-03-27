import {NavigateFunction} from 'react-router-dom';
import {Dispatch} from 'react';

export const newGameStart = async (
  setFetchErrorState: Dispatch<boolean>,
  navigate: NavigateFunction,
) => {
  try {
    const res = await fetch('http://localhost:3001/game', {
      method: 'POST',
    });
    const id = await res.json();
    navigate(`./game/${id}`);
  } catch (e) {
    setFetchErrorState(true);
  }
};

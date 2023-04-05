import {Dispatch, SetStateAction} from 'react';
import {GameParams} from 'types';

interface Args {
  gameId: string;
  setGameParams: Dispatch<SetStateAction<GameParams | null>>;
  setLoadGame: Dispatch<SetStateAction<boolean>>;
  setFetchErrorState: Dispatch<SetStateAction<boolean>>;
}

export const getGameParams = async (args: Args) => {
  const {gameId, setGameParams, setLoadGame, setFetchErrorState} = args;
  try {
    const res = await fetch(`http://localhost:3001/game/${gameId}`);
    const data = await res.json();
    setGameParams(data);
    setLoadGame(false);
  } catch (e) {
    setFetchErrorState(true);
  }
};

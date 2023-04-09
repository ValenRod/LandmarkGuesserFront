import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {GameParams} from 'types';

interface Props {
  gameId: string;
  loadGame: boolean;
  setLoadGame: Dispatch<SetStateAction<boolean>>;
  setFetchErrorState: Dispatch<SetStateAction<boolean>>;
}

export const useGameParams = (props: Props) => {
  const [gameParams, setGameParams] = useState<GameParams | null>(null);
  const {gameId, loadGame, setLoadGame, setFetchErrorState} = props;

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`http://localhost:3001/game/${gameId}`);
        const data = await res.json();
        setGameParams(data);
        setLoadGame(false);
      } catch (e) {
        setFetchErrorState(true);
      }
    })();
  }, [loadGame]);

  return {gameParams};
};

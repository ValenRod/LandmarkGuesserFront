import {Dispatch, SetStateAction, useEffect, useState} from 'react';

interface Props {
  gameId: string;
  setLoadGame: Dispatch<SetStateAction<boolean>>;
  setFetchErrorState: Dispatch<SetStateAction<boolean>>;
}

export const useStartNewRound = (props: Props) => {
  const [startNewRound, setStartNewRound] = useState<boolean>(false);
  const {gameId, setLoadGame, setFetchErrorState} = props;

  useEffect(() => {
    if (startNewRound) {
      (async () => {
        try {
          const res = await fetch(`http://localhost:3001/game/${gameId}`, {
            method: 'POST',
          });
          if (res.status !== 200) {
            throw new Error(res.statusText);
          }
          setLoadGame(true);
        } catch (e) {
          console.error(e);
          setFetchErrorState(true);
        }
      })();
    }
  }, [startNewRound]);

  return {setStartNewRound};
};

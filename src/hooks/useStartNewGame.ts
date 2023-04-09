import {NavigateFunction} from 'react-router-dom';
import {Dispatch, useEffect, useState} from 'react';

interface Props {
  setFetchErrorState: Dispatch<boolean>;
  navigate: NavigateFunction;
}

export const useStartNewGame = (props: Props) => {
  const [startNewGame, setStartNewGame] = useState<boolean>(false);
  const {setFetchErrorState, navigate} = props;

  useEffect(() => {
    if (startNewGame) {
      (async () => {
        try {
          const res = await fetch('http://localhost:3001/game', {
            method: 'POST',
          });
          const id = await res.json();
          if (res.status !== 200) {
            throw new Error(res.statusText);
          }
          navigate(`./game/${id}`);
        } catch (e) {
          console.error(e);
          setFetchErrorState(true);
        }
      })();
    }
  }, [startNewGame]);

  return {setStartNewGame};
};

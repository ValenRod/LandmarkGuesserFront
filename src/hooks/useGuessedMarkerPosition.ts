import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {Coordinates, GameUpdateRequestBody} from 'types';

interface Props {
  gameId: string;
  setLoadGame: Dispatch<SetStateAction<boolean>>;
  setFetchErrorState: Dispatch<SetStateAction<boolean>>;
}

export const useGuessedMarkerPosition = (props: Props) => {
  const [guessedMarkerPosition, setGuessedMarkerPosition] =
    useState<Coordinates | null>(null);
  const [sendGuessedMarkerPosition, setSendGuessedMarkerPosition] =
    useState<boolean>(false);

  const {gameId, setLoadGame, setFetchErrorState} = props;

  useEffect(() => {
    (async () => {
      if (sendGuessedMarkerPosition) {
        try {
          if (!guessedMarkerPosition) {
            throw new Error('guessedMarkerPosition cannot be null!');
          }

          const gameUpdateRequestBody: GameUpdateRequestBody = {
            playerGuessCoordinates: guessedMarkerPosition,
          };

          const res = await fetch(`http://localhost:3001/game/${gameId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(gameUpdateRequestBody),
          });
          if (res.status !== 200) {
            throw new Error(res.statusText);
          }
          setGuessedMarkerPosition(null);
          setSendGuessedMarkerPosition(false);
          setLoadGame(true);
        } catch (e) {
          console.error(e);
          setFetchErrorState(true);
        }
      }
    })();
  }, [sendGuessedMarkerPosition]);

  return {
    guessedMarkerPosition,
    setGuessedMarkerPosition,
    setSendGuessedMarkerPosition,
  };
};

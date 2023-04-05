import {Coordinates, GameUpdateRequestBody} from 'types';
import {Dispatch, SetStateAction} from 'react';

interface Args {
  gameId: string;
  guessedMarkerPosition: Coordinates | null;
  setGuessedMarkerPosition: Dispatch<SetStateAction<Coordinates | null>>;
  setLoadGame: Dispatch<SetStateAction<boolean>>;
  setFetchErrorState: Dispatch<SetStateAction<boolean>>;
}

export const sendGuessedMarkerPosition = async (args: Args) => {
  const {
    gameId,
    guessedMarkerPosition,
    setGuessedMarkerPosition,
    setLoadGame,
    setFetchErrorState,
  } = args;

  try {
    if (guessedMarkerPosition) {
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
      setLoadGame(true);
    } else {
      throw new Error('guessedMarkerPosition cannot be null!');
    }
  } catch (e) {
    console.error(e);
    setFetchErrorState(true);
  }
};

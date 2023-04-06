import React, {createContext, ReactNode, Dispatch, SetStateAction} from 'react';
import {GameParams, Coordinates} from 'types';
import {useGuessedMarkerPosition} from '../hooks/useGuessedMarkerPosition';

interface GameContextInterface {
  gameParams: GameParams;
  guessedMarkerPosition: Coordinates | null;
  setGuessedMarkerPosition: Dispatch<SetStateAction<Coordinates | null>>;
  setLoadGame: Dispatch<SetStateAction<boolean>>;
}

interface Props
  extends Omit<
    GameContextInterface,
    'guessedMarkerPosition' | 'setGuessedMarkerPosition'
  > {
  children: ReactNode;
}

export const GameContext = createContext<GameContextInterface | null>(null);

export const GameProvider = (props: Props) => {
  const {guessedMarkerPosition, setGuessedMarkerPosition} =
    useGuessedMarkerPosition();
  const {gameParams, setLoadGame, children} = props;

  return (
    <GameContext.Provider
      value={{
        gameParams,
        guessedMarkerPosition,
        setGuessedMarkerPosition,
        setLoadGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

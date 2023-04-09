import React, {createContext, ReactNode, Dispatch, SetStateAction} from 'react';
import {GameParams, Coordinates} from 'types';
import {useGuessedMarkerPosition} from '../hooks/useGuessedMarkerPosition';
import {useShowGameSummary} from '../hooks/useShowGameSummary';
import {useParams} from 'react-router-dom';
import {useFetchErrorContext} from '../hooks/useFetchErrorContext';

interface GameContextInterface {
  gameParams: GameParams;
  showGameSummary: boolean;
  setShowGameSummary: Dispatch<SetStateAction<boolean>>;
  guessedMarkerPosition: Coordinates | null;
  setGuessedMarkerPosition: Dispatch<SetStateAction<Coordinates | null>>;
  setSendGuessedMarkerPosition: Dispatch<SetStateAction<boolean>>;
  setLoadGame: Dispatch<SetStateAction<boolean>>;
}

interface Props
  extends Omit<
    GameContextInterface,
    | 'showGameSummary'
    | 'setShowGameSummary'
    | 'guessedMarkerPosition'
    | 'setGuessedMarkerPosition'
    | 'setSendGuessedMarkerPosition'
  > {
  children: ReactNode;
}

export const GameContext = createContext<GameContextInterface | null>(null);

export const GameProvider = (props: Props) => {
  const {gameParams, setLoadGame, children} = props;
  const gameId = useParams().id ?? '';
  const {setFetchErrorState} = useFetchErrorContext();
  const {showGameSummary, setShowGameSummary} = useShowGameSummary();
  const {
    guessedMarkerPosition,
    setGuessedMarkerPosition,
    setSendGuessedMarkerPosition,
  } = useGuessedMarkerPosition({
    gameId,
    setLoadGame,
    setFetchErrorState,
  });

  return (
    <GameContext.Provider
      value={{
        gameParams,
        showGameSummary,
        setShowGameSummary,
        guessedMarkerPosition,
        setGuessedMarkerPosition,
        setSendGuessedMarkerPosition,
        setLoadGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

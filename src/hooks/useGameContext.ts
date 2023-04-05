import {useContext} from 'react';
import {GameContext} from '../contexts/GameContext';

export const useGameContext = () => {
  const gameData = useContext(GameContext);

  if (!gameData) {
    throw new Error(
      'useGameContext cannot be used outside GameContext.Provider and value cannot be null!',
    );
  }
  return gameData;
};

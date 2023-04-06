import React from 'react';
import {GameContent} from '../../components/GameContent/GameContent';
import {useParams} from 'react-router-dom';
import {useFetchErrorContext} from '../../hooks/useFetchErrorContext';
import {GameProvider} from '../../contexts/GameContext';
import {useGameParams} from '../../hooks/useGameParams';
import {useLoadGame} from '../../hooks/useLoadGame';

export const Game = () => {
  const gameId = useParams().id ?? '';
  const {loadGame, setLoadGame} = useLoadGame();
  const {setFetchErrorState} = useFetchErrorContext();
  const {gameParams} = useGameParams({
    gameId,
    loadGame,
    setLoadGame,
    setFetchErrorState,
  });

  return gameParams ? (
    <div className="game">
      <GameProvider gameParams={gameParams} setLoadGame={setLoadGame}>
        <GameContent />
      </GameProvider>
    </div>
  ) : null;
};

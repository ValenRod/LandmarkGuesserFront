import React, {useEffect, useState} from 'react';
import {GameParams} from 'types';
import {GameContent} from '../../components/GameContent/GameContent';
import {getGameParams} from '../../utils/getGameParams';
import {useParams} from 'react-router-dom';
import {useFetchErrorContext} from '../../hooks/useFetchErrorContext';
import {GameProvider} from '../../contexts/GameContext';

export const Game = () => {
  const [gameParams, setGameParams] = useState<GameParams | null>(null);
  const [loadGame, setLoadGame] = useState<boolean>(true);
  const {setFetchErrorState} = useFetchErrorContext();
  const gameId = useParams().id ?? '';

  useEffect(() => {
    (async () => {
      await getGameParams({
        gameId,
        setGameParams,
        setLoadGame,
        setFetchErrorState,
      });
    })();
  }, [loadGame]);

  return gameParams ? (
    <div className="game">
      <GameProvider gameParams={gameParams} setLoadGame={setLoadGame}>
        <GameContent />
      </GameProvider>
    </div>
  ) : null;
};

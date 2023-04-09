import React from 'react';
import './Results.css';
import {useNavigate, useParams} from 'react-router-dom';
import {useFetchErrorContext} from '../../hooks/useFetchErrorContext';
import {useGameContext} from '../../hooks/useGameContext';
import {useStartNewRound} from '../../hooks/useStartNewRound';
import {PointsBar} from '../PointsBar/PointsBar';
import {Btn} from '../common/Btn/Btn';
import {RoundResults} from '../RoundResults/RoundResults';
import {GameResults} from '../GameResults/GameResults';

export const Results = () => {
  const gameId = useParams().id ?? '';
  const navigate = useNavigate();
  const {setFetchErrorState} = useFetchErrorContext();
  const {gameParams, setLoadGame, showGameSummary, setShowGameSummary} =
    useGameContext();
  const {setStartNewRound} = useStartNewRound({
    gameId,
    setLoadGame,
    setFetchErrorState,
  });
  const {rounds} = gameParams;

  return (
    <div className="results">
      <PointsBar />
      {showGameSummary ? (
        <>
          <GameResults />
          <Btn content={'Main menu'} action={() => navigate('/')} />
        </>
      ) : (
        <>
          <RoundResults />
          {rounds.length > 1 ? (
            <Btn
              content={'Show summary'}
              action={() => setShowGameSummary(true)}
            />
          ) : (
            <Btn content={'Next round'} action={() => setStartNewRound(true)} />
          )}
        </>
      )}
    </div>
  );
};

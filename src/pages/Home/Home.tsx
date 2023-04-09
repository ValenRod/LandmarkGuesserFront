import React from 'react';
import {Message} from '../../components/common/Message/Message';
import {useStartNewGame} from '../../hooks/useStartNewGame';
import {useNavigate} from 'react-router-dom';
import {useFetchErrorContext} from '../../hooks/useFetchErrorContext';

export const Home = () => {
  const navigate = useNavigate();
  const {setFetchErrorState} = useFetchErrorContext();
  const {setStartNewGame} = useStartNewGame({setFetchErrorState, navigate});

  const startNewGame = () => setStartNewGame(true);
  const btnAttributes = {
    content: 'Play',
    action: startNewGame,
  };

  return (
    <div className="home">
      <Message message={'Guess where you are!'} firstBtn={btnAttributes} />
    </div>
  );
};

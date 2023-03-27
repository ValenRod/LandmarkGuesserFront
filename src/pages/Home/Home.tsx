import React from 'react';
import {Message} from '../../components/common/Message/Message';
import {newGameStart} from '../../utils/newGameStart';
import {useNavigate} from 'react-router-dom';
import {useFetchErrorContext} from '../../hooks/useFetchErrorContext';

export const Home = () => {
  const navigate = useNavigate();
  const {setFetchErrorState} = useFetchErrorContext();
  const btnAction = () => newGameStart(setFetchErrorState, navigate);

  const btnAttributes = {
    content: 'Play',
    action: btnAction,
  };

  return (
    <div className="home">
      <Message message={'Guess where you are!'} firstBtn={btnAttributes} />
    </div>
  );
};

import React from 'react';
import {useNavigate} from 'react-router-dom';
import {BtnAttributes, Message} from '../../components/common/Message/Message';
import {useFetchErrorContext} from '../../hooks/useFetchErrorContext';

export const ErrorAlert = () => {
  const {setFetchErrorState} = useFetchErrorContext();
  const navigate = useNavigate();

  const goBackBtnAttributes: BtnAttributes = {
    content: 'Go back',
    action: () => {
      setFetchErrorState(false);
    },
  };
  const mainPageBtnAttributes: BtnAttributes = {
    content: 'Main page',
    action: () => {
      setFetchErrorState(false);
      navigate('/');
    },
  };

  return (
    <div className="error">
      <Message
        message={'Sorry, please try again later'}
        firstBtn={goBackBtnAttributes}
        secondBtn={mainPageBtnAttributes}
      />
    </div>
  );
};

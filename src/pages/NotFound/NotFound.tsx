import React from 'react';
import {BtnAttributes, Message} from '../../components/common/Message/Message';
import {useNavigate} from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  const btnAttributes: BtnAttributes = {
    content: 'Main page',
    action: () => navigate('/'),
  };

  return (
    <div className="not-found">
      <Message message={'Sorry, page not found'} firstBtn={btnAttributes} />
    </div>
  );
};

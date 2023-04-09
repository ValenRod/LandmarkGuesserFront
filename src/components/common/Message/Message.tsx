import React from 'react';
import './Message.css';
import {Btn} from '../Btn/Btn';

export interface BtnAttributes {
  content: string;
  action: () => void | Promise<void>;
}

interface Props {
  message: string;
  firstBtn: BtnAttributes;
  secondBtn?: BtnAttributes;
}

export const Message = (props: Props) => {
  const {message, firstBtn, secondBtn} = props;
  return (
    <div className="message">
      <p>{message}</p>
      <div className="btn-container">
        <Btn content={firstBtn.content} action={firstBtn.action} />
        {secondBtn ? (
          <Btn content={secondBtn.content} action={secondBtn.action} />
        ) : null}
      </div>
    </div>
  );
};

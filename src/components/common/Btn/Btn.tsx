import React from 'react';
import './Btn.css';

interface Props {
  content: string;
  action: () => void;
  className?: string;
  id?: string;
}

export const Btn = (props: Props) => {
  return (
    <button className={props.className} id={props.id} onClick={props.action}>
      {props.content}
    </button>
  );
};

import React, {ReactElement} from 'react';
import './Btn.css';

interface Props {
  content: string | ReactElement;
  action: () => void;
  className?: string;
  id?: string;
  disabled?: boolean;
}

export const Btn = (props: Props) => {
  const {content, action, className, id, disabled} = props;

  return (
    <button className={className} id={id} onClick={action} disabled={disabled}>
      {content}
    </button>
  );
};

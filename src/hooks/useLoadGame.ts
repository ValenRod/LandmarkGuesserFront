import {useState} from 'react';

export const useLoadGame = () => {
  const [loadGame, setLoadGame] = useState<boolean>(true);
  return {loadGame, setLoadGame};
};

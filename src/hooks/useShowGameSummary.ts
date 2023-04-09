import {useState} from 'react';

export const useShowGameSummary = () => {
  const [showGameSummary, setShowGameSummary] = useState<boolean>(false);
  return {showGameSummary, setShowGameSummary};
};

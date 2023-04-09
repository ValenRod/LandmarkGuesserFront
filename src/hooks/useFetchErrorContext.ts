import {useContext} from 'react';
import {FetchErrorContext} from '../contexts/FetchErrorContext';

export const useFetchErrorContext = () => {
  const contextData = useContext(FetchErrorContext);

  if (!contextData) {
    throw new Error(
      'useFetchErrorContext cannot be used outside FetchErrorContext.Provider and value cannot be null!',
    );
  }
  return contextData;
};

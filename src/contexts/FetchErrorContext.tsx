import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

interface Props {
  children: ReactNode;
}

interface FetchErrorContextInterface {
  fetchErrorState: boolean;
  setFetchErrorState: Dispatch<SetStateAction<boolean>>;
}

export const FetchErrorContext =
  createContext<FetchErrorContextInterface | null>(null);

export const FetchErrorProvider = (props: Props) => {
  const [fetchErrorState, setFetchErrorState] = useState(false);
  const value = {fetchErrorState, setFetchErrorState};

  return (
    <FetchErrorContext.Provider value={value}>
      {props.children}
    </FetchErrorContext.Provider>
  );
};

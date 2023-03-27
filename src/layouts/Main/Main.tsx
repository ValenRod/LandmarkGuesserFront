import React from 'react';
import './Main.css';
import {Route, Routes} from 'react-router-dom';
import {Home} from '../../pages/Home/Home';
import {Game} from '../../pages/Game/Game';
import {NotFound} from '../../pages/NotFound/NotFound';
import {ErrorAlert} from '../../pages/ErrorAlert/ErrorAlert';
import {useFetchErrorContext} from '../../hooks/useFetchErrorContext';

export const Main = () => {
  const {fetchErrorState} = useFetchErrorContext();
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={!fetchErrorState ? <Home /> : <ErrorAlert />}
        />
        <Route
          path="/game/:id"
          element={!fetchErrorState ? <Game /> : <ErrorAlert />}
        />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </main>
  );
};

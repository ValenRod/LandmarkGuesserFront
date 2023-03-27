import React from 'react';
import './Main.css';
import {Route, Routes} from 'react-router-dom';
import {Home} from '../../pages/Home/Home';
import {Game} from '../../pages/Game/Game';
import {NotFound} from '../../pages/NotFound/NotFound';

export const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<Game />} />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </main>
  );
};

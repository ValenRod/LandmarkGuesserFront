import React from 'react';
import './App.css';
import {Header} from './layouts/Header/Header';
import {Main} from './layouts/Main/Main';
import {FetchErrorProvider} from './contexts/FetchErrorContext';

function App() {
  return (
    <div className="App">
      <FetchErrorProvider>
        <Header />
        <Main />
      </FetchErrorProvider>
    </div>
  );
}

export default App;

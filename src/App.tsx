import React from 'react';
import './App.css';
import {Header} from "./components/layouts/Header";
import {Home} from "./components/home/Home";

export const App = () => {
  return (
   <>
     <Header/>
     <Home/>
   </>
  );
}


import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" render={ (props) => <Pokedex { ...props } pokemons={ pokemons } /> } />
    </BrowserRouter>
  );
}

export default App;
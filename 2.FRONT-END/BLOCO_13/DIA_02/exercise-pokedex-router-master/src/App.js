import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" render={ (props) => <Pokedex { ...props } pokemons={ pokemons } /> } />
      <Route path="/pokemon/:id" component={ PokemonDetails } />
    </BrowserRouter>
  );
}

export default App;
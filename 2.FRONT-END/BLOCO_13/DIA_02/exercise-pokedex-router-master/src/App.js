import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1> Pokedex </h1>
        <Route exact path="/" render={(reactRouterProps) => <Pokedex { ...reactRouterProps } pokemons={ pokemons } />}/>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';
import NotFound from './NotFound';
import About from './About';
import { BrowserRouter, Redirect, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <h1> Pokedex </h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>

      <Switch>
        <Route path="/pokemon/:id" component={ PokemonDetails } />
        <Route path='/about' component={ About } />
        <Route exact path="/" render={ (props) => <Pokedex { ...props } pokemons={ pokemons } /> } />
        <Route path="/404" component={ NotFound } />
        <Redirect to="/404" render={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
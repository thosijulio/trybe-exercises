import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends React.Component {
  constructor() {
    super();
    this.changeList = this.changeList.bind(this);
    this.state = {
      pokemons,
    }
  }

  changeList(type) {
    this.setState((oldState, _props) => ({
      pokemons: pokemons.filter((pokemon) => pokemon.type === type),
    }));
  }

  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={this.state.pokemons} />
        <button onClick={ () => (this.changeList('Fire')) } type="button">Fire</button>
        <button onClick={ () => (this.changeList('Psychic')) } type="button">Psychic</button>
      </div>
    );
  }
}

export default App;
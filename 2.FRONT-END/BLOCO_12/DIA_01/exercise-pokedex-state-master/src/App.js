import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: pokemons,
    }
    this.changeList = this.changeList.bind(this);
  }

  changeList(type) {
    this.setState({
      pokemons: pokemons.filter((pokemon) => type === 'All' ? true : pokemon.type === type),
    });
  }

  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={this.state.pokemons} />
        <button onClick={ () => (this.changeList('Fire')) } type="button">Fire</button>
        <button onClick={ () => (this.changeList('Psychic')) } type="button">Psychic</button>
        <button onClick={ () => (this.changeList('All')) } type="button">All</button>
      </div>
    );
  }
}

export default App;
import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      indexPokemon: 0,
    }
  }

  handleClick() {
    if (this.props.pokemons[this.state.indexPokemon + 1]) 
    this.setState((oldState, _props) => ({
      indexPokemon: oldState.indexPokemon + 1,
    }))
    else
    this.setState({
      indexPokemon: 0,
    })
  }

  render() {
    return (
      <div className="pokedex">
        <Pokemon key={this.props.pokemons[this.state.indexPokemon].id} pokemon={this.props.pokemons[this.state.indexPokemon]} />
        <button onClick={ this.handleClick } type="button">Trocar</button>
      </div>
    );
  }
}

export default Pokedex;
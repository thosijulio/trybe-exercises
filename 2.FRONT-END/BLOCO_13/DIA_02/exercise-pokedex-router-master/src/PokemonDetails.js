import React from 'react';
import pokemons from './data';
import './pokemonDetails.css';

class PokemonDetails extends React.Component {

  render() {
    const pokemon = pokemons.find((poke) => (poke.id === parseInt(this.props.match.params.id)))
    const { summary, foundAt } = pokemon;
    return (
      <>
        <h2>Summary</h2>
        <p>{ summary }</p>
        <h2>{`Game Locations of ${pokemon.name}`}</h2>
        { foundAt.map((loc, index) => (
            <div key={index}>
              <img alt={ `${pokemon.name} location` } src={ loc.map } />
              <p>{ `${loc.location}` }</p>
            </div>
        ))}
      </>
    )
  }
}

export default PokemonDetails;
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Pokemons extends Component {
  render() {
    return (
      <div>
        <section>
          <h3>{this.props.pokemon.name}</h3>
          <p>{this.props.pokemon.type}</p>
          <p>Average weight: {this.props.pokemon.averageWeight.value} {this.props.pokemon.averageWeight.measurementUnit}</p>
        </section>
        <img src={this.props.pokemon.image} alt={this.props.pokemon.name}></img>
      </div>
    )
  }
}

Pokemons.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemons;
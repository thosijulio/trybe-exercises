import React from 'react';
import PokedexImage from './Pokédex.png';

class About extends React.Component {
  render() {
    return (
      <>
        <h2>About Pokédex</h2>
        <p>This application simulates a Pokédex, a digital inciclopedia containing all Pokémons</p>
        <p>One can filter Pokémons by type, and see more details for each one of then</p>
        <img src={ PokedexImage } alt="Pokédex" style={ { width: "400px" } }/>
      </>
    )
  }
}

export default About;
import './App.css';
import data from './data';
import Pokemons from './components/Pokemons';

function App() {
  return (
    <header>
      <h1>Pokedex</h1>
    {data.map((pokemon) => (
        <Pokemons pokemon={pokemon} />
    ))}
    </header>
  );
}

export default App;

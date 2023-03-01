import './App.css';
import pokemons from 'src/assets/pokemons.json';

function App() {
  return (
    <div className="App">
      <ul>
        <article>
          <p>{pokemons.results[0].name}</p>
          <img src={pokemons.results[0].sprites.large} alt="" />
        </article>
      </ul>
    </div>
  );
}

export default App;

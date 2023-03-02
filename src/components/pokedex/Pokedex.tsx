import { v1 as uuid } from 'uuid';
import styled from 'styled-components';
import pokemons from 'src/assets/pokemons.json';
import Pokemon from 'src/components/pokemon';
import bg from 'src/assets/body_bg.png';

const Container = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  background: #fff;
`;

const PokemonList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: transparent url(bg) left top;
`;

const Pokedex = () => {
  return (
    <Container>
      <PokemonList>
        {pokemons.results.map((pokemon) => (
          <li key={uuid()}>
            <Pokemon nationalNumber={pokemon.national_number} name={pokemon.name} type={pokemon.type} />
          </li>
        ))}
      </PokemonList>
    </Container>
  );
};

export default Pokedex;

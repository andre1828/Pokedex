import { v1 as uuid } from 'uuid';
import styled from 'styled-components';
import pokemons from 'src/assets/pokemons.json';
import Pokemon from 'src/components/pokemon';
import bg from 'src/assets/body_bg.png';
import Search from 'src/components/search';
import { useState } from 'react';

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
  const [searchResults, setSearchResults] = useState(pokemons.results);

  const handleSearchChange = (searchTerm: string) => {
    if (searchTerm === '') {
      setSearchResults(pokemons.results);
      return;
    }

    const term = searchTerm.toLowerCase();
    const regex = new RegExp(term, 'gi');
    const isSeachByname = Number.isNaN(Number.parseInt(term));
    let searchResults;
    if (isSeachByname) {
      searchResults = pokemons.results.filter((pokemon) => pokemon.name.match(regex));
    } else {
      searchResults = pokemons.results.filter((pokemon) => pokemon.national_number.match(regex));
    }

    setSearchResults(searchResults);
  };

  return (
    <Container>
      <Search handleSearchChange={handleSearchChange} />
      <PokemonList>
        {searchResults.map((pokemon) => (
          <li key={uuid()}>
            <Pokemon nationalNumber={pokemon.national_number} name={pokemon.name} type={pokemon.type} />
          </li>
        ))}
      </PokemonList>
    </Container>
  );
};

export default Pokedex;

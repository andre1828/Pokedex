import { v1 as uuid } from 'uuid';
import styled from 'styled-components';
import Pokemon from 'src/components/pokemon';
import bg from 'src/assets/body_bg.png';
import Search from 'src/components/search';
import EmptyListMessage from 'src/components/empty-list-message';
import usePokemonReducer from 'src/reducers';

const Container = styled.div`
  width: 90%;
  height: max-content;
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

const ShowFavoritesButton = styled.button`
  font-size: 105%;
  margin: 30px auto 0 auto;
  padding: 0.75em 1.25em 0.67em;
  border: none;
  border-radius: 5px;
  background-color: ${(props: { isActive: boolean }) => (props.isActive ? '#30a7d7' : '#f2f2f2')};

  &:hover {
    background-color: ${(props: { isActive: boolean }) => (props.isActive ? '#30a7d7' : ' #ccc')};
  }
`;

const FilterableList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Pokedex = () => {
  const [state, dispatch] = usePokemonReducer();

  return (
    <Container>
      <Search handleSearchChange={dispatch} />
      <FilterableList>
        <ShowFavoritesButton
          isActive={state.isShowFavoritesOnly}
          onClick={() => dispatch({ type: 'show_favorites_changed', isShowFavorites: !state.isShowFavoritesOnly })}
        >
          Exibir somente favoritos
        </ShowFavoritesButton>
        {state.filteredPokemons.length ? (
          <PokemonList>
            {state.filteredPokemons.map((pokemon) => (
              <li key={uuid()}>
                <Pokemon
                  nationalNumber={pokemon.national_number}
                  name={pokemon.name}
                  type={pokemon.type}
                  toggleFavorite={dispatch}
                />
              </li>
            ))}
          </PokemonList>
        ) : (
          <EmptyListMessage />
        )}
      </FilterableList>
    </Container>
  );
};

export default Pokedex;

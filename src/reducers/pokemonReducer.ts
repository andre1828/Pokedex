import { useReducer } from 'react';
import pokemons from 'src/assets/pokemons.json';

const initialState = {
  pokemons: pokemons.results,
  filteredPokemons: pokemons.results,
  isShowFavoritesOnly: false,
  isDoingSeach: false
};

const usePokemonReducer = () => {
  const pokemonReducer = (state, action) => {
    switch (action.type) {
      case 'search_term_changed': {
        if (action.searchTerm === '') {
          return {
            ...initialState,
            isDoingSeach: false
          };
        }

        const term = action.searchTerm.toLowerCase();
        const regex = new RegExp(term, 'gi');
        const isSeachByname = Number.isNaN(Number.parseInt(term));
        let searchResults;
        if (isSeachByname) {
          searchResults = pokemons.results.filter((pokemon) => pokemon.name.match(regex));
        } else {
          searchResults = pokemons.results.filter((pokemon) => pokemon.national_number.match(regex));
        }

        return {
          ...initialState,
          filteredPokemons: searchResults,
          isDoingSearch: true
        };
      }
      case 'show_favorites_changed': {
        return {
          ...initialState,
          filteredPokemons: state.pokemons.filter((pokemon) => pokemon.isFavorite === action.isShowFavorites),
          isShowFavoritesOnly: action.isShowFavorites
        };
      }
      // case 'toggleFavorite': {
      // }
    }
  };

  return useReducer(pokemonReducer, initialState);
};

export default usePokemonReducer;

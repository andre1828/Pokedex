import { useReducer } from 'react';

const initialState = {
  isLoading: false,
  pokemons: [],
  filteredPokemons: [],
  isShowFavoritesOnly: false,
  isDoingSeach: false
};

const usePokemonReducer = () => {
  const pokemonReducer = (state, action) => {
    switch (action.type) {
      case 'loading_pokemons_changed': {
        if (action.isLoading === true) {
          return initialState;
        } else {
          return {
            ...initialState,
            filteredPokemons: action.pokemons
          };
        }
      }
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

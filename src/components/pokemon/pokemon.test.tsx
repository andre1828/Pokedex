import Pokemon from 'src/components/pokemon';
import { render, screen } from '@testing-library/react';
import pokemons from 'src/assets/pokemons.json';

test('should render Pokemon correctly', () => {
  const bulbasaur = pokemons.results[0];

  render(<Pokemon name={bulbasaur.name} nationalNumber={bulbasaur.national_number} type={bulbasaur.type} />);

  expect(screen.getByRole('img')).toBeDefined();
  expect(screen.getByText(/#/)).toBeDefined();
  expect(screen.getByText(/001/)).toBeDefined();
  expect(screen.getByText(/Bulbasaur/)).toBeDefined();
  expect(screen.getByText(/Grass/)).toBeDefined();
  expect(screen.getByText(/Poison/)).toBeDefined();
});

import styled from 'styled-components';
import searchIcon from 'src/assets/input-search-bg.png';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  height: 196px;
  padding-left: 158px;
  background-color: #424242;
`;
const SearchTitle = styled.p`
  color: #fff;
  margin-top: 0px;
  font-size: 167.5%;
`;
const SearchInput = styled.input`
  width: 311px;
  height: 41px;
  border: 3px solid #616161;
  border-radius: 5px;
`;

const SearchButton = styled.button`
  width: 55px;
  height: 50px;
  margin-left: 23px;
  background-color: #ee6b2f;
  border: none;
  border-radius: 5px;
`;

const Subtitle = styled.p`
  color: #fff;
`;

const InfoBox = styled.div`
  background-color: #4dad5b;
  height: 87px;
  align-self: center;
  width: 429px;
  margin-left: 53px;
  border-radius: 5px;
`;

const InfoText = styled.h4`
  color: #fff;
  margin: 0.75em 0.5em 0 1em;
  font-size: 125%;
`;

interface SearchProps {
  handleSearchChange: (obj: { type: string; searchTerm: string }) => void;
}
const Search = ({ handleSearchChange }: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Container>
      <div>
        <SearchTitle>Name or Number</SearchTitle>
        <SearchInput type="text" onKeyUp={(e) => setSearchTerm(e.target.value)} />
        <SearchButton type="submit" onClick={() => handleSearchChange({ type: 'search_term_changed', searchTerm })}>
          <img src={searchIcon} alt="" />
        </SearchButton>
        <Subtitle>
          Use the Advanced Search to explore Pokémon by type, <br /> weakness, Ability, and more!
        </Subtitle>
      </div>
      <InfoBox>
        <InfoText>Search for a pokémon by name or using its National Pokédex number.</InfoText>
      </InfoBox>
    </Container>
  );
};

export default Search;

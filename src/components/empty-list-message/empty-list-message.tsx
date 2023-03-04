import styled from 'styled-components';

const sugestionColor = '#919191';
const Container = styled.div`
  border: 2px solid #e3350d;
  border-radius: 5px;
  width: 50%;
  margin: 3% auto;
`;

const Title = styled.h3`
  color: #e3350d;
  margin-left: 20px;
`;

const SugestionsTitle = styled.strong`
  color: ${sugestionColor};
  margin: 1em;
`;

const SugestionsList = styled.ul`
  list-style-type: disc;
  margin: '.5em';
  color: ${sugestionColor};
`;

const EmptyListMessage = () => {
  return (
    <Container>
      <Title>No Pokémon matched your search!</Title>
      <p>
        <SugestionsTitle>Try these suggestions to find a Pokémon:</SugestionsTitle>
      </p>
      <SugestionsList>
        <li>
          <p>Reduce the number of search parameters</p>
        </li>
        <li>
          <p>Search for only one Pokémon type at a time</p>
        </li>
        <li>
          <p>Try multiple body sizes and shapes</p>
        </li>
      </SugestionsList>
    </Container>
  );
};

export default EmptyListMessage;

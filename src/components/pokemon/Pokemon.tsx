import styled from 'styled-components';
import { v1 as uuid } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';

const ImageContainer = styled.div`
  background-color: #f2f2f2;
`;

const NationalNumber = styled.p`
  color: '#919191';
  margin-top: '8px';
`;

const PokemonName = styled.h5`
  font-size: 145%;
  margin: 0.5em 0;
  color: #313131;
`;

const TypesContainer = styled.div`
  display: flex;
`;

const Type = styled.div`
  margin: 0 5px 0 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`;

const TypeName = styled.span`
  border-radius: 3px;
  line-height: 18px;
  background-color: ${(props) => props.backgroundColor};
  background: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor};
  margin-right: 1.5%;
  padding: 2px 23px;
  width: 38.5%;
  font-size: 11px;
`;

const FavoriteIcon = styled(FontAwesomeIcon)`
  margin-left: 5px;
  display: ${(props) => (props.isvisible === 'true' ? 'inline-block' : 'none')};
  cursor: pointer;

  figure:hover & {
    display: inline-block;
  }
`;

const imgURL = (nationalNumber: string) =>
  `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${nationalNumber}.png`;

/* 
  bug #729f3f #fff
  dragon linear-gradient(180deg, #53a4cf 50%, #f16e57 50%) #fff
  fairy #fdb9e9 #212121
  fire #fd7d24 #fff
  ghost #7b62a3 #fff
  ground linear-gradient(180deg, #f7de3f 50%, #ab9842 50%) #212
  normal  #a4acaf #212
  pyschic#f366b9 #fff
  steel #9eb7b8 #212
  dark #707070 #fff
  eletric #eed535 #212
  fighting #d56723 #fff
  flying linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%) #212
  grass #9bcc50 #212
  ice #51c4e7 #212
  poison #b97fc9 #fff
  rock #a38c21 #fff
  water #4592c4 #fff


  */
const getTypeFontColor = (type: string) => {
  const colorMap = {
    Bug: '#fff',
    Dragon: '#fff',
    Fairy: '#212',
    Fire: '#fff',
    Ghost: '#fff',
    Ground: '#212',
    Normal: '#212',
    Psychic: '#fff',
    Steel: '#212',
    Dark: '#fff',
    Electric: '#212',
    Fighting: '#fff',
    Flying: '#212',
    Grass: '#212',
    Ice: '#212',
    Poison: '#fff',
    Rock: '#fff',
    Water: '#fff'
  };

  const result = colorMap[type] || undefined;
  return result;
};

const getTypeBackgroundColor = (type: string) => {
  const colorMap = {
    Bug: '#729f3f',
    Dragon: 'linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)',
    Fairy: '#fdb9e9',
    Fire: '#fd7d24',
    Ghost: '#7b62a3',
    Ground: 'linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)',
    Normal: '#a4acaf',
    Psychic: '#f366b9',
    Steel: '#9eb7b8',
    Dark: '#707070',
    Electric: '#eed535',
    Fighting: '#d56723',
    Flying: 'linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)',
    Grass: '#9bcc50',
    Ice: '#51c4e7',
    Poison: '#b97fc9',
    Rock: '#a38c21',
    Water: '#4592c4'
  };

  return colorMap[type] || undefined;
};

interface PokemonProps {
  nationalNumber: string;
  name: string;
  type: string[];
}

const Pokemon = ({ nationalNumber, name, type }: PokemonProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const favoriteIcon = isFavorite ? faStar : faStarHalf;

  return (
    <figure>
      <ImageContainer>
        <img src={imgURL(nationalNumber)} alt={name} />
      </ImageContainer>
      <NationalNumber>
        <span style={{ fontStyle: 'italic' }}>#</span>
        {nationalNumber}
      </NationalNumber>
      <figcaption>
        <PokemonName>
          {name}
          <FavoriteIcon
            icon={favoriteIcon}
            isvisible={isFavorite.toString()}
            onClick={() => setIsFavorite(!isFavorite)}
            data-testid="favorite-icon"
          />
        </PokemonName>
      </figcaption>
      <TypesContainer>
        {type.map((type) => (
          <Type key={uuid()}>
            <TypeName backgroundColor={getTypeBackgroundColor(type)} fontColor={getTypeFontColor(type)}>
              {type}
            </TypeName>
          </Type>
        ))}
      </TypesContainer>
    </figure>
  );
};

export default Pokemon;

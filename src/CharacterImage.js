import React from 'react';
import styled from 'styled-components';

const CharacterImageStyled = styled.img`
  height: 100%;
  border-radius: 50%;
`;

const CharacterImage = ({ image, name }) => {
  return <CharacterImageStyled src={image} alt={name} />;
};

export default CharacterImage;

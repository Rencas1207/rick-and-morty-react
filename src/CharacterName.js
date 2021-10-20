import React from 'react';
import styled from 'styled-components';

const CharacterNameStyled = styled.div`
  font-size: 3rem;
  position: relative;
  h2::before {
    content: '';
    position: absolute;
    display: inline-block;
    width: 5rem;
    height: 0.3rem;
    top: 50%;
    left: calc(100% + 5px);
    background-color: #f7391c;
  }
`;

const CharacterName = ({ name }) => {
  return (
    <CharacterNameStyled>
      <h2>{name}</h2>
    </CharacterNameStyled>
  );
};

export default CharacterName;

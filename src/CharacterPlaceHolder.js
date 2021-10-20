import React from 'react';
import styled from 'styled-components';

const CharacterPlaceHolderStyled = styled.div`
  overflow: hidden;
  text-transform: uppercase;
  color: black;
  opacity: 0.1;
  font-size: 30rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  z-index: -1;
`;

const CharacterPlaceHolder = ({ name }) => {
  return <CharacterPlaceHolderStyled>{name}</CharacterPlaceHolderStyled>;
};

export default CharacterPlaceHolder;

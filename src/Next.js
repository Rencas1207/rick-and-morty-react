import React, { useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { CharacterContext } from './character-context';
import NProgress from 'nprogress';

const NextStyled = styled.div`
  background-image: url('./img/arrow.svg');
  background-repeat: no-repeat;
  background-position: left bottom;
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  position: relative;
  display: flex;
  margin: 0 auto;

  &::before {
    content: attr(data-target);
    position: absolute;
    bottom: -3rem;
    left: -0.4rem;
    display: block;
    font-weight: bold;
    font-size: 2rem;
  }
`;

const Next = () => {
  const { character } = useContext(CharacterContext);

  const history = useHistory();

  // console.log(name);

  const handleNextCharacter = async () => {
    NProgress.start();
    history.push(`/${character.id + 1}`);
    NProgress.done();
    window.scrollTo(0, 0);
  };

  return (
    <NextStyled data-target="Next" onClick={handleNextCharacter}></NextStyled>
  );
};

export default Next;

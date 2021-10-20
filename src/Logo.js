import React from 'react';
import styled from 'styled-components';

import logo from './img/logo@2x.png';

const LogoStyled = styled.div`
  grid-area: logo;
  width: 100%;
  .logo {
    margin: 0 auto 2rem;
    display: block;
    width: 40rem;
  }
`;

export const Logo = () => {
  return (
    <LogoStyled>
      <img className="logo" src={logo} alt="Logo de Rick and Morty" />
    </LogoStyled>
  );
};

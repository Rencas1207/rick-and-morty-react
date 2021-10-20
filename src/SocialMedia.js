import React from 'react';

import styled from 'styled-components';

import facebook from './img/facebook.svg';
import instagram from './img/instagram.svg';
import twitter from './img/twitter.svg';

const SocialMediaStyled = styled.div`
  grid-area: social;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  a {
    width: 3.8rem;
    height: 3.8rem;
  }

  @media screen and (max-width: 991px) {
    grid-area: social;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    a {
      width: 3.8rem;
      height: 3.8rem;
      padding-inline: 1rem;
    }
  }
`;

export const SocialMedia = () => {
  return (
    <SocialMediaStyled>
      <a href="https://www.facebook.com/">
        <img src={facebook} alt="facebook" />
      </a>
      <a href="https://www.instagram.com/">
        <img src={instagram} alt="instagram" />
      </a>
      <a href="https://www.twitter.com/">
        <img src={twitter} alt="twitter" />
      </a>
    </SocialMediaStyled>
  );
};

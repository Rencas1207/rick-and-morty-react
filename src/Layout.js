import React from 'react';
import styled from 'styled-components';
import { Dot } from './Dot';
import { LearnMore } from './LearnMore';
import { Line } from './Line';

import { Logo } from './Logo';
import { SocialMedia } from './SocialMedia';

const LayoutStyled = styled.div`
  display: grid;
  overflow: hidden;
  position: relative;
  padding: 1rem;
  margin: 0;
  grid-template-columns: 5rem 50rem 1fr 15rem;
  grid-template-rows: 17rem 12rem 20rem 18rem;
  column-gap: 2rem;
  grid-template-areas:
    'asset-top logo logo social'
    'name character-name avatar avatar'
    'about character-description avatar avatar'
    'asset-bottom learn-more arrow arrow';
  .character-name-area {
    grid-area: character-name;
    display: flex;
    align-items: center;
  }
  .character-img-area {
    grid-area: avatar;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .character-description-area {
    grid-area: character-description;
  }

  .next-area {
    grid-area: arrow;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 1024px) {
    .character-name-area {
      margin-top: 1rem;
      justify-content: center;
    }
  }
  @media screen and (max-width: 991px) {
    grid-template-columns: 5rem 1fr 15rem;
    grid-template-rows: 17rem 12rem 20rem 18rem 1fr 8rem 5rem 8rem;
    gap: 2rem 1rem;
    grid-template-areas:
      'asset-top logo logo'
      'name avatar avatar'
      'about avatar avatar'
      'asset-bottom character-name character-name'
      'character-description character-description character-description'
      'arrow arrow arrow'
      'learn-more learn-more learn-more'
      'social social social';
  }
`;

const Layout = ({ Name, Img, Description, Next }) => {
  return (
    <LayoutStyled>
      <span className="asset top">
        <Dot />
        <Dot />
        <Dot />
        <Line />
      </span>
      <Logo />
      <SocialMedia />
      <div className="navigation name">
        <a href="https://www.facebook.com/">Name</a>
      </div>

      <div className="character-name-area">{Name}</div>
      <div className="character-img-area">{Img}</div>

      <div className="navigation about">
        <a href="https://www.facebook.com/">About</a>
      </div>

      <div className="character-description-area">{Description}</div>

      <span className="asset bottom">
        <Line />
        <Dot />
        <Dot />
        <Dot />
      </span>

      <div></div>
      <LearnMore />
      <div className="next-area">{Next}</div>
    </LayoutStyled>
  );
};

export default Layout;

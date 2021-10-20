import React from 'react';
import styled from 'styled-components';

const LearnMoreStyled = styled.div`
  grid-area: learn-more;
  display: flex;
  align-items: center;
  padding-bottom: 3rem;
  width: auto;
  font-size: 2.5rem;
  text-transform: capitalize;
  background-image: url('./img/learn-more.svg');
  background-repeat: no-repeat;
  background-position: left 17rem bottom 9rem;
  @media screen and (max-width: 991px) {
    grid-area: learn-more;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    text-transform: capitalize;
    background-image: none;
  }
`;

export const LearnMore = () => {
  return (
    <LearnMoreStyled className="learn-more">
      <span>learn more</span>
    </LearnMoreStyled>
  );
};

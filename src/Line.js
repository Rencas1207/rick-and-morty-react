import React from 'react';
import styled from 'styled-components';

const DotStyled = styled.span`
  width: 0.2rem;
  height: 8rem;
  padding: 1rem auto 1rem;
  background: black;
  display: inline-flex;
  margin-inline: 1.5rem;
`;

export const Line = () => {
  return <DotStyled className="line"></DotStyled>;
};

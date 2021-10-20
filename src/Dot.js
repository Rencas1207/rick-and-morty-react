import React from 'react';
import styled from 'styled-components';

const DotStyled = styled.span`
  width: 1rem;
  height: 1rem;
  background: black;
  border-radius: 50%;
  display: inline-flex;
  margin-inline: 5px;
`;

export const Dot = () => {
  return <DotStyled className="dot"></DotStyled>;
};

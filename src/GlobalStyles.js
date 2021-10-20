import {createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
   body {
  margin: 0;
  padding: 0;
  background: #00a5be;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-image: url('./img/asset-red.svg');
  background-repeat: no-repeat;
  background-position: left 10% top 0;
}
html {
  font-size: 62.5%;
}
img {
  max-width: 100%;
}
.learn-more {
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
}
.arrow {
  grid-area: arrow;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.arrow div {
  background-image: url('./img/arrow.svg');
  background-repeat: no-repeat;
  background-position: left bottom;
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  position: relative;
}
.arrow div::before {
  content: attr(data-target);
  position: absolute;
  bottom: -3rem;
  left: -1.8rem;
  display: block;
  font-weight: bold;
  font-size: 2rem;
}
.asset.top {
  grid-area: asset-top;
  writing-mode: vertical-rl;
  display: flex;
  align-items: center;
  justify-content: center;
}
.asset.bottom {
  grid-area: asset-bottom;
  writing-mode: vertical-rl;
  display: flex;
  align-items: center;
}
.navigation {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
}
.navigation.name {
  grid-area: name;
}
.navigation.about {
  grid-area: about;
}
.navigation a {
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  font-size: 2.5rem;
}
.navigation .text {
  display: inline-flex;
  margin-inline: 3.5rem;
  font-size: 2rem;
}
.character {
  text-align: center;
}

`;
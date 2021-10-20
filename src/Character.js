import React, { useEffect, useState } from 'react';

import CharacterName from './CharacterName';
import CharacterImage from './CharacterImage';
import CharacterDescription from './CharacterDescription';
import CharacterPlaceHolder from './CharacterPlaceHolder';
import Next from './Next';
import Layout from './Layout';

import './nprogress.css';

import { CharacterContext } from './character-context';

import api from './Api';

export const Character = ({ match }) => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    async function getCharacter() {
      setCharacter(await api.getCharacter(match.params.id || 1));
    }
    getCharacter();
  }, [match.params.id]);

  return (
    <>
      <CharacterContext.Provider value={{ character }}>
        <CharacterPlaceHolder name={character.name} />
        <Layout
          Next={<Next />}
          Name={<CharacterName name={character.name} />}
          Img={<CharacterImage image={character.image} name={character.name} />}
          Description={
            <CharacterDescription
              gender={character.gender}
              species={character.species}
              status={character.status}
            />
          }
        />
      </CharacterContext.Provider>
    </>
  );
};

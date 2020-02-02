import React, { useState } from 'react';
import styled from 'styled-components';

import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Menu from '../layouts/Menu/Menu';

import WordsDatabase from '../layouts/WorkingAreas/WordsDatabase/WordsDatabase';

const Container = styled.div`
  display: flex;
`;

const Home = ({ isLogged, isSuperUser, name, handleAuthorization }) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      {!isLogged && <Header isLogged={isLogged} name={name} />}
      {!isLogged && <Hero />}
      <Container>
        {isLogged && open && <Menu handleAuthorization={handleAuthorization} />}
        {isLogged && <WordsDatabase name={name} />}
      </Container>
    </>
  );
};

export default Home;

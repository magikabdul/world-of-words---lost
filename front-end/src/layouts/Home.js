import React from 'react';

import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';

const Home = ({ isLogged, name }) => {
  return (
    <>
      <Header isLogged={isLogged} name={name} />
      <Hero />
    </>
  );
};

export default Home;

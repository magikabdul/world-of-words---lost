import React, { useState } from 'react';

import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Menu from '../layouts/Menu/Menu';
// const UserLogged = ({ name }) => {};

// const Default = () => {};

const Home = ({ isLogged, isSuperUser, name }) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      {!isLogged && <Header isLogged={isLogged} name={name} />}
      {!isLogged && <Hero />}
      {isLogged && open && <Menu />}
    </>
  );
};

export default Home;

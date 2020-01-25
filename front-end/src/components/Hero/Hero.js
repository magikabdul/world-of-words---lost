import React from 'react';
import { Link } from 'react-router-dom';

import './hero.scss';

const Hero = () => {
  return (
    <div className='hero--container'>
      <h1 className='hero--title'>Practice your words knowledge</h1>
      <p className='hero--slogan'>Your way to increase knowledge</p>
      <Link to='/register'>
        <button className='hero--button'>register</button>
      </Link>
    </div>
  );
};

export default Hero;

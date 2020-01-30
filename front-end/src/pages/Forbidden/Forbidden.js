import React from 'react';
import { Link } from 'react-router-dom';

import './forbidden.scss';

const Forbidden = () => {
  return (
    <div className='forbidden'>
      <h1 className='forbidden--header'>Forbidden</h1>
      <div className='forbidden--title'>403 - page forbidden</div>
      <div className='forbidden--message'>
        You are not allowed to enter here !!!
      </div>
      <Link to='/'>
        <div className='forbidden--button'>go homepage</div>
      </Link>
    </div>
  );
};

export default Forbidden;

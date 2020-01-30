import React from 'react';
import { Link } from 'react-router-dom';

import './error.scss';

const Error = () => {
  return (
    <div className='error--container'>
      <h2 className='error--title'>404</h2>
      <div className='error--message'>
        <h3 className='error--message__title'>page not found</h3>
        <p className='error--message__body'>
          Why don't you try one of this pages instead?
        </p>
        <Link to='/'>
          <button className='error--button'>Back home</button>
        </Link>
        <div className='error--footer'>
          &copy; 2020 All rights reserved. Designed by{' '}
          <strong className='error--footer__author'>magikabdul</strong>
        </div>
      </div>
    </div>
  );
};

export default Error;

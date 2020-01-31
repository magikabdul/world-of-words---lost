import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

function userBar(isLogged, name) {
  if (isLogged) {
    return (
      <div
        className='header--user__avatar'
        onClick={() => {
          alert('dd');
        }}
      >
        <div className='header--user__icon'></div>
        <div className='header--user__name'>{name}</div>
      </div>
    );
  } else {
    return (
      <div className='header--user'>
        <Link to='/login'>
          <button className='header--user__button header--user__login'>
            sign in
          </button>
        </Link>

        <Link to='/register'>
          <button className='header--user__button header--user__register'>
            sign up
          </button>
        </Link>
      </div>
    );
  }
}

const Header = ({ isLogged, name }) => {
  return (
    <header className='header'>
      <div className='header--logo'></div>
      <div className='header--title'>world of words</div>
      {userBar(isLogged, name)}
    </header>
  );
};

export default Header;

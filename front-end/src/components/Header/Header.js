import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

function userBar(isLogged, name) {
  if (isLogged) {
    return <p>zalogowany</p>;
  } else {
    return (
      <>
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
      </>
    );
  }
}

const Header = ({ isLogged, name }) => {
  return (
    <header className='header'>
      <div className='header--logo'></div>
      <div className='header--title'>world of words</div>
      <div className='header--user'>{userBar(isLogged, name)}</div>
    </header>
  );
};

export default Header;

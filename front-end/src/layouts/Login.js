import React from 'react';

import { Link } from 'react-router-dom';

import Header from '../components/Header/Header';
import LoginForm from '../components/LoginForm/LoginForm';

const Login = ({ isLogged, name }) => {
  return (
    <>
      <Header isLogged={isLogged} name={name} />
      <div className='login'>
        <h2 className='login--title'>sign in</h2>
        <p className='login--line'></p>
        <p className='login--message'>
          Not a member yet?<em className='login--message-em'>Sign Up here</em>
        </p>
        <LoginForm />
      </div>
    </>
  );
};

export default Login;

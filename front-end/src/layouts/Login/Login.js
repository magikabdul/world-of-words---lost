import React from 'react';

import { Link } from 'react-router-dom';

import './login.scss';
import Header from '../../components/Header/Header';

const Form = () => {
  return (
    <div className='login--form'>
      <label htmlFor='user-name' className='login--label'>
        user name
      </label>
      <input
        id='user-name'
        className='login--input'
        type='text'
        required
      ></input>
      <label className='login--label'>password</label>
      <input className='login--input' type='password' required></input>
      <Link to='work'>
        <button className='login--button' type='submit'>
          Login
        </button>
      </Link>
    </div>
  );
};

const Login = ({ isLogged, name }) => {
  return (
    <>
      <Header isLogged={isLogged} name={name} />
      <div className='login'>
        <h2 className='login--title'>sign in</h2>
        <p className='login--line'></p>
        <p className='login--message'>
          Not a member yet?<em className='login--message-em'> Sign Up here</em>
        </p>
        <Form />
      </div>
    </>
  );
};

export default Login;

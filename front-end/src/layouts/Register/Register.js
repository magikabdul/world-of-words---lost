import React from 'react';

import { Link } from 'react-router-dom';

import './register.scss';
import Header from '../../components/Header/Header';

const Form = () => {
  return (
    <>
      <div className='register--form'>
        <div className='register--user'>
          <div className='register--user__name'>
            <label className='register--label' htmlFor='user-firstName'>
              First Name
            </label>
            <input
              className='register--input'
              id='user-firstName'
              type='text'
            />
          </div>

          <div className='register--user__name'>
            <label className='register--label' htmlFor='user-lastName'>
              Last Name
            </label>
            <input className='register--input' id='user-lastName' type='text' />
          </div>
        </div>

        <label className='register--label' htmlFor='user-email'>
          Email
        </label>
        <input className='register--input' id='user-email' type='email' />
        <label className='register--label' htmlFor='user-password'>
          Password
        </label>
        <input className='register--input' id='user-password' type='password' />
        <label className='register--label' htmlFor='user-retype-password'>
          Retype Password
        </label>
        <input
          className='register--input'
          id='user-retype-password'
          type='password'
        />
        <Link to='/'>
          <button className='register--button'>register</button>
        </Link>
      </div>
    </>
  );
};

const Register = ({ isLogged, name }) => {
  return (
    <>
      <Header isLogged={isLogged} name={name} />
      <div className='register'>
        <h2 className='register--title'>sign up</h2>
        <p className='register--line'></p>
        <Link to='/login'>
          <p className='register--message'>Already have an account?</p>
        </Link>
        <Form />
      </div>
    </>
  );
};

export default Register;

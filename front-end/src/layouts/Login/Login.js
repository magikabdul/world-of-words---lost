import React, { useState } from 'react';
import styled from 'styled-components';

import { Link, useHistory } from 'react-router-dom';
import { userService } from '../../services';

import Header from '../../components/Header/Header';

const Container = styled.div`
  color: white;
  margin: 4rem auto;
  width: 35%;
  text-align: center;
  font-family: 'Arsenal', sans-serif;
  border-radius: 10px;
  transition: 2s;
  &:hover {
    box-shadow: 0px 0px 40px 30px rgba(0, 0, 0, 0.3);
  }
`;

const Title = styled.h2`
  padding-top: 1rem;
  font-size: 4rem;
  text-transform: capitalize;
`;

const Underline = styled.p`
  margin: auto;
  margin-top: 1rem;
  border: solid 2px red;
  width: 70px;
`;

const Message = styled.p`
  margin-top: 2rem;
  font-size: 0.8rem;
  letter-spacing: 0.15rem;
`;

const Emphasis = styled.em`
  color: white;
  text-decoration: underline;
`;

const FormContainer = styled.form`
  width: 80%;
  margin: 2.5rem auto;
  padding-bottom: 2.5rem;
`;

const Label = styled.label`
  display: block;
  text-align: left;
  padding-bottom: 0.6rem;
  text-transform: capitalize;
`;

const Input = styled.input.attrs(props => ({
  type: props.type || 'text'
}))`
  display: block;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-bottom: 1rem;
  box-sizing: border-box;
`;

const Button = styled.button`
  margin-top: 2rem;
  width: 100%;
  padding: 0.8rem;
  background: #e91e63;
  border: 1px solid #e91e63;
  color: white;
  border-radius: 5px;
  font-size: 1.1rem;
  text-transform: uppercase;
  transition: 0.5s;
  &:hover {
    background: #e91e6242;
  }
`;

const ErrorMessage = styled.div`
  margin-top: 2rem;
  color: red;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
`;

const Login = ({ isLogged, name, handleAuthorization }) => {
  const history = useHistory();
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    userName: '',
    password: '',
    errorMessage: ''
  });

  const updateForm = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

    setError(false);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const errors = userService.validateLogin(form);
    if (errors) {
      setForm({
        ...form,
        errorMessage: errors
      });

      setError(true);
    } else {
      const response = await userService.login(form);
      console.log(response);

      if (response.status !== 200) {
        setForm({
          ...form,
          errorMessage: 'wrong login or password'
        });
        setError(true);
      } else {
        handleAuthorization();
        history.push('/');
      }
    }
  };

  return (
    <>
      <Header isLogged={isLogged} name={name} />

      <Container>
        <Title>Sign in</Title>
        <Underline />
        <Message>
          Not a member yet?{' '}
          <Link to='/register'>
            <Emphasis>Sign Up here</Emphasis>
          </Link>
        </Message>
        <FormContainer>
          <Label htmlFor='userName'>user name</Label>
          <Input
            id='userName'
            name='userName'
            value={form.userName}
            onChange={updateForm}
          />
          <Label htmlFor='password'>password</Label>
          <Input
            type='password'
            id='password'
            name='password'
            value={form.password}
            onChange={updateForm}
          />
          <Button onClick={handleSubmit}>login</Button>
          {error ? <ErrorMessage>{form.errorMessage}</ErrorMessage> : null}
        </FormContainer>
      </Container>
    </>
  );
};

export default Login;

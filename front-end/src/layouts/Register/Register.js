import React, { useState } from 'react';
import styled from 'styled-components';

import { Link, useHistory } from 'react-router-dom';
import { userService } from '../../services';

import Header from '../../components/Header/Header';

const Register = ({ isLogged, name }) => {
  const history = useHistory();
  const [error, setError] = useState(null);

  const [form, setForm] = useState({
    userName: '',
    firstName: '',
    lastName: '',
    password1: '',
    password2: '',
    email: '',
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
    const errors = userService.validateRegistration(form);
    if (errors) {
      // sprawdzaj czy coś tam będziesz miał w tej tablicy
      setForm({
        ...form,
        errorMessage: errors
      });
      setError(true);
    } else {
      try {
        const response = await userService.register(form);
        console.log(response);
        if (response.status !== 201) {
          const json = await response.json();
          console.log(json);
          setForm({
            ...form,
            errorMessage: json.message
          });
          setError(true);
        } else {
          setForm({
            userName: '',
            firstName: '',
            lastName: '',
            password1: '',
            password2: '',
            email: ''
          });

          history.push('/login');
        }
      } catch (e) {
        setError(e);
      }
    }
  };

  return (
    <>
      <Header isLogged={isLogged} name={name} />
      <Container>
        <Title>sign up</Title>
        <UnderLine />
        <Link to='/login'>
          <LinkToLogin>Already have an account?</LinkToLogin>
        </Link>

        <FormContainer>
          <EntryBox width='90%'>
            <Label htmlFor='userName'>user name</Label>
            <Input
              id='userName'
              name='userName'
              value={form.userName}
              onChange={updateForm}
            />
          </EntryBox>
          <UserContainer>
            <EntryBox width='80%'>
              <Label htmlFor='firstName'>first name</Label>
              <Input
                id='firstName'
                name='firstName'
                value={form.firstName}
                onChange={updateForm}
              />
            </EntryBox>
            <EntryBox width='80%'>
              <Label htmlFor='lastName'>last name</Label>
              <Input
                id='lastName'
                name='lastName'
                value={form.lastName}
                onChange={updateForm}
              />
            </EntryBox>
          </UserContainer>
          <EntryBox width='90%'>
            <Label htmlFor='password1'>password</Label>
            <Input
              type='password'
              id='password1'
              name='password1'
              value={form.password1}
              onChange={updateForm}
            />
          </EntryBox>
          <EntryBox width='90%'>
            <Label htmlFor='password2'>re-Type Password</Label>
            <Input
              type='password'
              id='password2'
              name='password2'
              value={form.password2}
              onChange={updateForm}
            />
          </EntryBox>
          <EntryBox width='90%'>
            <Label htmlFor='email'>Email address</Label>
            <Input
              type='email'
              id='email'
              name='email'
              value={form.email}
              onChange={updateForm}
            />
          </EntryBox>
          <Button onClick={handleSubmit}>register</Button>
          {error ? <ErrorMessage>{form.errorMessage}</ErrorMessage> : null}
        </FormContainer>
      </Container>
    </>
  );
};

export default Register;

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

const UnderLine = styled.p`
  margin: auto;
  margin-top: 1rem;
  border: solid 2px red;
  width: 70px;
`;

const LinkToLogin = styled.p`
  margin-top: 2rem;
  font-size: 0.8rem;
  letter-spacing: 0.15rem;
  text-decoration: underline;
  color: white;
  margin-bottom: 1rem;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const EntryBox = styled.div`
  margin: 0 5% 1rem;
  width: ${props => props.width || '100%'};
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
  box-sizing: border-box;
`;

const Button = styled.div`
  margin: 2rem 0 1rem;
  width: 84%;
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
  color: red;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
`;

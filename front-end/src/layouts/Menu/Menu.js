import React from 'react';
import styled from 'styled-components';

import HorizontalSpacer from '../../components/HorizontalSpacer/HorizontalSpacer';

import './menu.scss';

const Container = styled.div.attrs(props => ({
  position: props.position || '0px'
}))`
  transform: translateX(${props => props.position});
  background: rgba(255, 255, 255, 0.1);
  width: 15rem;
  height: 100vh;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding-top: 3rem;
  justify-content: space-evenly;
`;

const Logo = styled.div`
  width: 2rem;
  height: 2rem;
`;

const ApplicationName = styled.div`
  text-transform: uppercase;
  font-size: 1.1rem;
  color: white;
`;

const Menu = () => {
  return (
    <Container position=''>
      <Header>
        <Logo className='logo' />
        <ApplicationName>world of words</ApplicationName>
      </Header>
      <HorizontalSpacer />
    </Container>
  );
};

export default Menu;

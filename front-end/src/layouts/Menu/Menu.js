import React from 'react';
import styled from 'styled-components';

import {
  IconDashboard,
  IconUser,
  IconDatabase,
  IconLogout
} from '../../modules/images-svg';

import HorizontalSpacer from '../../components/HorizontalSpacer/HorizontalSpacer';
import MenuItem from '../../components/MenuItem/MenuItem';

const Container = styled.div.attrs(props => ({
  position: props.position || '0px'
}))`
  transform: translateX(${props => props.position});
  background: rgba(0, 0, 0, 0.5);
  width: 15rem;
  height: 100vh;
  box-shadow: 0 0 20px;
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
  background-image: url('../../images/nuclear.jpg');
  background-position: center;
  background-size: cover;
`;

const ApplicationName = styled.div`
  text-transform: uppercase;
  font-size: 1.1rem;
  color: white;
`;

const Menu = ({ mode, setMode, handleLogout }) => {
  return (
    <Container position=''>
      <Header>
        <Logo
          style={{ backgroundImage: "url('../../images/forbidden.jpg')" }}
        />
        <ApplicationName>world of words</ApplicationName>
      </Header>
      <HorizontalSpacer />
      <MenuItem
        title='dashboard'
        isSelected={mode === 0}
        icon={<IconDashboard />}
        onClick={() => {
          setMode(0);
        }}
      />
      <MenuItem
        title='user details'
        isSelected={mode === 1}
        icon={<IconUser />}
        mode={1}
        onClick={() => {
          setMode(1);
        }}
      />
      <HorizontalSpacer />
      <MenuItem
        title='words database'
        isSelected={mode === 2}
        icon={<IconDatabase />}
        onClick={() => {
          setMode(2);
        }}
      />
      <HorizontalSpacer />
      <MenuItem
        title='logout'
        isSelected={false}
        icon={<IconLogout />}
        onClick={handleLogout}
      />
    </Container>
  );
};

export default Menu;

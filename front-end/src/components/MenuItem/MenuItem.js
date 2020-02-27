import React from 'react';
import styled from 'styled-components';

const Container = styled.button.attrs(props => ({
  isSelected: props.isSelected || null
}))`
  margin: 0.2rem 0.8rem;
  height: 3rem;
  width: 90%;
  border: none;
  display: flex;
  align-items: center;
  transition: 0.3s;
  color: white;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  &:hover {
    color: ${props => (props.isSelected ? 'white' : '#00acc1')};
  }
`;

const Icon = styled.div`
  width: 2rem;
  height: 2rem;
  margin: 0 1rem;
  padding: 5px;
  box-sizing: border-box;
`;

const Title = styled.div`
  text-transform: capitalize;
  font-size: 0.875rem;
`;

const MenuItem = ({ title, isSelected, icon, onClick }) => {
  return (
    <Container
      onClick={onClick}
      isSelected={isSelected}
      style={isSelected ? { background: '#00acc1' } : { background: 'none' }}
    >
      <Icon>{icon}</Icon>
      <Title>{title}</Title>
    </Container>
  );
};

export default MenuItem;

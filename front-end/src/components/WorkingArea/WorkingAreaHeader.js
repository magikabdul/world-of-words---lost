import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: #a9a9a9;
  height: 3.25rem;
  padding: 0.625rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.span`
  padding: 0.75rem 1.875rem;
  font-size: 1.125rem;
  font-weight: 300;
  text-transform: capitalize;
  color: #3c4858;
`;

const User = styled.span`
  padding: 0.75rem 1.875rem;
  align-self: center;
`;

const WorkingAreaHeader = ({ title, name }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {name && <User>{`Hello ${name}`}</User>}
    </Container>
  );
};

export default WorkingAreaHeader;

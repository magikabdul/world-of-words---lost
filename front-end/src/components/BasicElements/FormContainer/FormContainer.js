import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: ${props => props.width || '80%'};
  padding: 1rem 1.25rem;
  margin: 0.5rem auto 0;

  color: ${props => props.color || 'inherit'};
  background: ${props => props.background || 'inherit'};

  display: ${props => props.display || 'block'};
`;

const FormContainer = ({ display, color, background, children, width }) => {
  return (
    <Container
      display={display}
      background={background}
      color={color}
      width={width}
    >
      {children}
    </Container>
  );
};

export default FormContainer;

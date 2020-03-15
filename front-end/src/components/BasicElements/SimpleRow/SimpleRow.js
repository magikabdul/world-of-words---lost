import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: ${props => props.width || '100%'};
  margin-top: ${props => props.marginTop};
  display: ${props => props.display || 'block'};
  background: ${props => props.background || 'inherit'};
  justify-content: ${props => props.justifyContent || 'inherit'};
`;

const SimpleRow = ({ children, display, justifyContent, marginTop }) => {
  return (
    <Container
      display={display}
      justifyContent={justifyContent}
      marginTop={marginTop}
    >
      {children}
    </Container>
  );
};

export default SimpleRow;

import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: ${props => props.size || '90%'};
  height: 1rem;
  margin: 5px auto;
  position: relative;

  &:after {
    content: '';
    height: 1px;
    background-color: ${props => props.color || 'rgba(255, 255, 255, 0.5)'};
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
  }
`;

const HorizontalSpacer = ({ size, color }) => {
  return <Wrapper size={size} color={color}></Wrapper>;
};

export default HorizontalSpacer;

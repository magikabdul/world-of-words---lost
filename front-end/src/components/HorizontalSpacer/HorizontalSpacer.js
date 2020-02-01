import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div.attrs(props => ({
  size: props.size || '90%'
}))`
  width: ${props => props.size};
  height: 1rem;
  margin: 5px auto;
  position: relative;

  &:after {
    content: '';
    height: 1px;
    background-color: rgba(255, 255, 255, 0.5);
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
  }
`;

const HorizontalSpacer = ({ size }) => {
  return <Wrapper size={size}></Wrapper>;
};

export default HorizontalSpacer;

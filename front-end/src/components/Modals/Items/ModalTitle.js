import React from 'react';
import styled from 'styled-components';

const Title = styled.h3`
  color: #3c4858;
  font-size: 2.2rem;
  font-weight: 300;
  margin-top: 2rem;
`;

const ModalTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

export default ModalTitle;

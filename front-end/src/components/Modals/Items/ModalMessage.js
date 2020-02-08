import React from 'react';
import styled from 'styled-components';

import * as colors from '../../../modules/Colors';

const Message = styled.span`
  color: ${colors.DEFAULT};
  margin: 2rem 0;
  font-weight: 300;
`;

const ModalMessage = ({ message }) => {
  return <Message>{message}</Message>;
};

export default ModalMessage;

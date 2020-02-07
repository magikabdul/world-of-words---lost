import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import * as color from '../../modules/Colors';
import { IconConfirm } from '../../modules/images-svg';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBox = styled.div`
  width: 50%;
  background: white;
  border-radius: 5px;
  box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const IconBox = styled.div`
  color: #5cb85c;
  margin-top: 2rem;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: 4px solid rgba(92, 184, 92, 0.2);
  animation: spin 2s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes spin {
    0% {
      border: 4px solid rgba(92, 184, 92, 1);
    }
    100% {
      border: 4px solid rgba(92, 184, 92, 0.2);
    }
  }
`;

const ModalTitle = styled.h3`
  color: #3c4858;
  font-size: 2.2rem;
  font-weight: 300;
  margin-top: 2rem;
`;

const ModalMessage = styled.span`
  color: #aaa;
  margin: 2rem 0;
  font-weight: 500;
`;

const ModalAdded = () => {
  useEffect(() => {
    const id = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(id);
  });

  const [show, setShow] = useState(false);
  return (
    <ModalContainer>
      <ModalBox>
        <IconBox>
          {show ? <IconConfirm width='3rem' height='3rem' /> : null}
        </IconBox>
        <ModalTitle>Added!</ModalTitle>
        <ModalMessage>Record added to database.</ModalMessage>
      </ModalBox>
    </ModalContainer>
  );
};

export default ModalAdded;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { IconConfirm } from '../../modules/images-svg';

import ModalContainer from '../../components/Modals/Items/ModalContainer';
import ModalBox from '../../components/Modals/Items/ModalBox';
import ModalTitle from '../../components/Modals/Items/ModalTitle';
import ModalMessage from '../../components/Modals/Items/ModalMessage';

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
        <ModalTitle title='Added!' />
        <ModalMessage message='Record added to database.' />
      </ModalBox>
    </ModalContainer>
  );
};

export default ModalAdded;

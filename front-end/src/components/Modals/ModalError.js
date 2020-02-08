import React from 'react';
import styled from 'styled-components';

import * as colors from '../../modules/Colors';
import { IconCancel } from '../../modules/images-svg';

import ModalContainer from '../../components/Modals/Items/ModalContainer';
import ModalBox from '../../components/Modals/Items/ModalBox';
import ModalTitle from '../../components/Modals/Items/ModalTitle';
import ModalMessage from '../../components/Modals/Items/ModalMessage';
import Button from '../../components/Buttons/Button';

const IconBox = styled.div`
  color: rgba(212, 63, 58, 1);
  margin-top: 2rem;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: 4px solid rgba(212, 63, 58, 1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalError = ({ handleErrorMessageClose }) => {
  return (
    <ModalContainer>
      <ModalBox style={{ paddingBottom: '2rem' }}>
        <IconBox>
          <IconCancel width='2.5rem' height='2.5rem' />
        </IconBox>
        <ModalTitle title='Error' />
        <ModalMessage message='Wrong data entered!' />
        <Button
          background={colors.INFO}
          width='20%'
          text='close'
          onClick={handleErrorMessageClose}
        />
      </ModalBox>
    </ModalContainer>
  );
};

export default ModalError;

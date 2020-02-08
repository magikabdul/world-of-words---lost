import React from 'react';
import styled from 'styled-components';

import * as colors from '../../modules/Colors';
import { IconExclamation } from '../../modules/images-svg';

import ModalContainer from '../../components/Modals/Items/ModalContainer';
import ModalBox from '../../components/Modals/Items/ModalBox';
import ModalTitle from '../../components/Modals/Items/ModalTitle';
import Button from '../../components/Buttons/Button';

const ModalIconContainer = styled.div`
  color: rgb(238, 162, 54);
  margin: 2rem auto;
`;

const ButtonContainer = styled.div`
  margin: 2rem auto;
  width: 90%;
  display: flex;
  justify-content: center;
`;

const InfoContainer = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoBox = styled.div`
  margin: 0 3rem;
  width: 40%;
`;

const InfoHeader = styled.h5`
  color: #aaa;
  font-size: 0.8rem;
  margin: 0 auto 0.5rem;
  text-transform: uppercase;
`;

const InfoMessage = styled.span`
  font-size: 1.25rem;
  color: #b8b8b8;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
`;

const ModalConfirmAdding = ({ polishWord, englishWord, handleAddToDb }) => {
  return (
    <ModalContainer>
      <ModalBox>
        <ModalIconContainer>
          <IconExclamation width='5rem' height='5rem' />
        </ModalIconContainer>
        <InfoContainer>
          <InfoBox>
            <InfoHeader>polish</InfoHeader>
            <InfoMessage>{polishWord}</InfoMessage>
          </InfoBox>
          <InfoBox>
            <InfoHeader>english</InfoHeader>
            <InfoMessage>{englishWord}</InfoMessage>
          </InfoBox>
        </InfoContainer>
        <ModalTitle title='Is that correct?'></ModalTitle>
        <ButtonContainer>
          <Button
            background={colors.DANGER}
            width={'40%'}
            onClick={() => handleAddToDb(false)}
            text={'cancel'}
          />
          <Button
            background={colors.SUCCESS}
            width={'40%'}
            onClick={() => handleAddToDb(true)}
            text={'yes, save it!'}
          />
        </ButtonContainer>
      </ModalBox>
    </ModalContainer>
  );
};

export default ModalConfirmAdding;

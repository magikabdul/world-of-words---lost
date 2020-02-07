import React from 'react';
import styled from 'styled-components';

import * as color from '../../modules/Colors';
import { IconExclamation } from '../../modules/images-svg';

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
  /* animation: blur 2s backwards;

  @keyframes blur {
    0% {
      filter: blur(0px);
    }

    100% {
      filter: blur(4px);
    }
  } */
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

const ModalIconContainer = styled.div`
  color: rgb(238, 162, 54);
  margin: 2rem auto;
`;

const ModalTitle = styled.h3`
  color: #3c4858;
  font-size: 2.2rem;
  font-weight: 300;
`;

const ButtonContainer = styled.div`
  margin: 2rem auto;
  width: 90%;
  display: flex;
  justify-content: center;
`;

const Button = styled.button.attrs(props => ({
  type: 'button'
}))`
  color: white;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 0.875rem;
  background: ${props => props.background};
  margin: 0 1rem;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 3px;
  transition: 0.2s;
  box-shadow: 0 14px 26px -12px rgba(76, 175, 80, 0.42),
    0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2);
  width: 40%;

  &:hover {
    box-shadow: 0 14px 26px -12px rgba(76, 175, 80, 0.42),
      0 4px 23px 10px rgba(0, 0, 0, 0.12),
      0 8px 10px -5px rgba(76, 175, 80, 0.2);
  }
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
        <ModalTitle>Is that correct?</ModalTitle>
        <ButtonContainer>
          <Button
            background={color.WARNING}
            onClick={() => handleAddToDb(false)}
          >
            cancel
          </Button>
          <Button
            background={color.SUCCESS}
            onClick={() => handleAddToDb(true)}
          >
            yes, save it!
          </Button>
        </ButtonContainer>
      </ModalBox>
    </ModalContainer>
  );
};

export default ModalConfirmAdding;

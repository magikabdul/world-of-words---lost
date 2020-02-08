import React from 'react';
import styled from 'styled-components';

const BoxContainer = styled.div`
  padding: 0 1rem;
  box-sizing: border-box;
  flex: 0 0 80%;
  margin: auto;
`;

const Box = styled.div`
  height: 25rem;
  margin: 1.875rem 0;
  display: flex;
  flex-direction: column;
  background: white;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  border-radius: 6px;
`;

const BoxHeader = styled.div`
  padding: 1rem;
  margin: 0 1rem;
  height: 2.5rem;
  background: linear-gradient(
    60deg,
    ${props => props.colorStart || 'lightgray'},
    ${props => props.colorEnd || 'gray'}
  );
  border-radius: 3px;
  display: flex;
  align-items: center;
  transform: translateY(-1rem);
`;

const HeaderTitle = styled.div`
  padding: 0 0.5rem;
  color: white;
  font-size: 0.875rem;
`;

const HeaderModeContainer = styled.div`
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  color: white;
  display: flex;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  transition: 0.3s;
  cursor: pointer;

  background: ${props =>
    props.modeSelected ? 'rgba(255, 255, 255, 0.2)' : 'none'};

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const HeaderModeIcon = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 0.5rem;
`;

const HeaderModeButton = styled.div`
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
`;

const BoxWithHeaderControls = ({
  headerTitle,
  colorStart,
  colorEnd,
  modesNumber,
  modeSelected,
  modeName1,
  modeIcon1,
  modeName2,
  modeIcon2,
  modeName3,
  modeIcon3,
  modeName4,
  modeIcon4,
  modeName5,
  modeIcon5,
  handleMode,
  formType1,
  formType2,
  formType3,
  formType4,
  formType5
}) => {
  return (
    <BoxContainer>
      <Box>
        <BoxHeader colorStart={colorStart} colorEnd={colorEnd}>
          <HeaderTitle>{headerTitle}</HeaderTitle>
          {modesNumber >= 1 ? (
            <HeaderModeContainer
              modeSelected={modeSelected === 1}
              onClick={() => handleMode(1)}
            >
              <HeaderModeIcon>{modeIcon1}</HeaderModeIcon>
              <HeaderModeButton>{modeName1}</HeaderModeButton>
            </HeaderModeContainer>
          ) : null}
          {modesNumber >= 2 ? (
            <HeaderModeContainer
              modeSelected={modeSelected === 2}
              onClick={() => handleMode(2)}
            >
              <HeaderModeIcon>{modeIcon2}</HeaderModeIcon>
              <HeaderModeButton>{modeName2}</HeaderModeButton>
            </HeaderModeContainer>
          ) : null}
          {modesNumber >= 3 ? (
            <HeaderModeContainer
              modeSelected={modeSelected === 3}
              onClick={() => handleMode(3)}
            >
              <HeaderModeIcon>{modeIcon3}</HeaderModeIcon>
              <HeaderModeButton>{modeName3}</HeaderModeButton>
            </HeaderModeContainer>
          ) : null}
          {modesNumber >= 4 ? (
            <HeaderModeContainer
              modeSelected={modeSelected === 4}
              onClick={() => handleMode(4)}
            >
              <HeaderModeIcon>{modeIcon4}</HeaderModeIcon>
              <HeaderModeButton>{modeName4}</HeaderModeButton>
            </HeaderModeContainer>
          ) : null}
          {modesNumber >= 5 ? (
            <HeaderModeContainer
              modeSelected={modeSelected === 5}
              onClick={() => handleMode(5)}
            >
              <HeaderModeIcon>{modeIcon5}</HeaderModeIcon>
              <HeaderModeButton>{modeName5}</HeaderModeButton>
            </HeaderModeContainer>
          ) : null}
        </BoxHeader>
        {modeSelected === 1 ? formType1 : null}
        {modeSelected === 2 ? formType2 : null}
        {modeSelected === 3 ? formType3 : null}
        {modeSelected === 4 ? formType4 : null}
        {modeSelected === 5 ? formType5 : null}
      </Box>
    </BoxContainer>
  );
};

export default BoxWithHeaderControls;

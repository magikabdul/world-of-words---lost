import React from 'react';
import styled from 'styled-components';

const BoxContainer = styled.div`
  padding: 0 1rem;
  box-sizing: border-box;
  flex: 0 0 33.333%;
`;

const Box = styled.div`
  margin: 1.875rem 0;
  display: flex;
  flex-direction: column;
  background: white;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  border-radius: 6px;
`;

const UpperRow = styled.div`
  margin: 0 1rem;
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  background: linear-gradient(
    60deg,
    ${props => props.colorStart || 'lightgray'},
    ${props => props.colorEnd || 'gray'}
  );
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14);
  border-radius: 3px;
  margin-right: 1rem;
  transform: translateY(-1rem);
`;

const IconArea = styled.div`
  width: 2rem;
  height: 2rem;
  color: white;
  margin: 1.5rem;
`;

const InfoContainer = styled.div`
  flex: 1;
  text-align: right;
  font-weight: 300;
  display: flex;
  flex-direction: column;
`;

const TitleArea = styled.div`
  padding-top: 1rem;
  color: #999;
  text-transform: capitalize;
`;

const ValueArea = styled.h3`
  color: #3c4858;
  line-height: 1.5rem;
  font-size: 1.825rem;
  padding-top: 0.5rem;
`;

const Units = styled.small`
  color: #777;
  font-weight: 400;
  line-height: 1;
  font-size: 50%;
  text-transform: uppercase;
`;

const LowerRow = styled.div`
  margin: 1.25rem 1rem 0.625rem;
  padding-top: 0.625rem;
  color: #999;
  border-top: 1px solid #eee;
  display: flex;
  align-items: center;
`;

const MessageIcon = styled.div`
  width: 1rem;
  height: 1rem;
  padding: 0 0.5rem;
`;

const Message = styled.div`
  font-size: 0.75rem;
  text-transform: capitalize;
`;

const BoxWithIcon = ({
  icon,
  colorStart,
  colorEnd,
  title,
  value,
  units,
  iconMessage,
  message
}) => {
  return (
    <BoxContainer>
      <Box>
        <UpperRow>
          <IconContainer colorStart={colorStart} colorEnd={colorEnd}>
            <IconArea>{icon}</IconArea>
          </IconContainer>
          <InfoContainer>
            <TitleArea>{title}</TitleArea>
            <ValueArea>
              {value}
              <Units>{units}</Units>
            </ValueArea>
          </InfoContainer>
        </UpperRow>
        <LowerRow>
          <MessageIcon>{iconMessage}</MessageIcon>
          <Message>{message}</Message>
        </LowerRow>
      </Box>
    </BoxContainer>
  );
};

export default BoxWithIcon;

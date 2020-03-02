import React from 'react';
import styled from 'styled-components';
import * as colors from '../../../modules/Colors';

const ListContainer = styled.div`
  background: ${props => props.background || 'white'};
  color: ${props => props.color || 'gray'};
  height: 3rem;
  display: flex;
  align-items: center;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 14px;
  margin: 6px 0;
  transition: 1s;
  cursor: ${props => props.cursor || 'default'};
`;

const Id = styled.span`
  text-align: center;
  padding: 0 16px;
  flex-basis: 7%;
`;

const Name = styled.div`
  flex-basis: 20%;
`;

const LastSeen = styled.div`
  flex-basis: 10%;
  text-align: center;
  font-weight: ${props => props.fontWeight || '100'};
  line-height: 1.3;
  color: ${props => props.color || 'white'};
`;

const Result = styled.div`
  text-align: center;
  font-weight: ${props => props.fontWeight || '100'};
  line-height: 1.2;
  flex-basis: 7%;
  color: ${props => props.color || 'white'};
`;

const ControlBox = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;

const ButtonEdit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  outline: none;
  border: none;
  margin: 0 0.5rem;
  border-radius: 3px;
  background: ${colors.SUCCESS};
  &:hover {
    box-shadow: 0 14px 26px -12px rgba(153, 153, 153, 0.42),
      0 4px 23px 0px rgba(0, 0, 0, 0.12),
      0 8px 10px -5px rgba(153, 153, 153, 0.2);
  }
`;

const ButtonDelete = styled.button`
  width: 2rem;
  height: 2rem;
  outline: none;
  border: none;
  margin: 0 0.5rem;
  border-radius: 3px;
  background: ${colors.DANGER};
  &:hover {
    box-shadow: 0 14px 26px -12px rgba(153, 153, 153, 0.42),
      0 4px 23px 0px rgba(0, 0, 0, 0.12),
      0 8px 10px -5px rgba(153, 153, 153, 0.2);
  }
`;

const IconBox = styled.span`
  width: 2rem;
`;

const ListRow = ({
  background,
  color,
  columnId,
  studentName,
  lastSeen,
  lastSeenColor,
  weekTest,
  weekScore,
  weekColor,
  monthTest,
  monthScore,
  monthColor,
  totalTest,
  totalScore,
  totalColor,
  hoverBackground,
  fontWeight,
  icons,
  handleStudentUpdate,
  handleStudentDelete
}) => {
  return (
    <ListContainer
      background={background}
      color={color}
      hoverBackground={hoverBackground}
    >
      <Id>{columnId}</Id>
      <Name>{studentName}</Name>
      <LastSeen color={lastSeenColor} fontWeight={fontWeight}>
        {lastSeen}
      </LastSeen>
      <Result color={weekColor} fontWeight={fontWeight}>
        {weekTest}
      </Result>
      <Result color={weekColor} fontWeight={fontWeight}>
        {weekScore}
      </Result>
      <Result color={monthColor} fontWeight={fontWeight}>
        {monthTest}
      </Result>
      <Result color={monthColor} fontWeight={fontWeight}>
        {monthScore}
      </Result>
      <Result color={totalColor} fontWeight={fontWeight}>
        {totalTest}
      </Result>
      <Result color={totalColor} fontWeight={fontWeight}>
        {totalScore}
      </Result>
      <ControlBox>
        {icons && (
          <ButtonEdit
            onClick={() => {
              handleStudentUpdate(columnId);
            }}
          >
            <IconBox>
              <svg viewBox='0 0 24 24' version='1.1'>
                <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                  <path
                    d='M9.25735931,20.3994949 L9.87867966,19.7781746 L4.22182541,14.1213203 L16.9497475,1.39339828 C18.1213203,0.221825407 20.0208153,0.221825407 21.1923882,1.39339828 L22.6066017,2.80761184 C23.7781746,3.97918472 23.7781746,5.87867966 22.6066017,7.05025253 L9.25735931,20.3994949 Z M8.45752148,21.1854435 C7.91718787,21.6447027 7.22908814,21.8994949 6.51471863,21.8994949 L2.60050506,21.8994949 C2.32436269,21.8994949 2.10050506,21.6756373 2.10050506,21.3994949 L2.10050506,17.4852814 C2.10050506,16.7709119 2.35529734,16.0828121 2.81455646,15.5424785 L8.45752148,21.1854435 Z'
                    fill='#ffffff'
                  ></path>
                </g>
              </svg>
            </IconBox>
          </ButtonEdit>
        )}
        {icons && (
          <ButtonDelete
            onClick={() => {
              handleStudentDelete(columnId);
            }}
          >
            <IconBox>
              <svg fill='#ffffff' version='1.1' viewBox='0 0 98 98'>
                <path d='M62.7,18.8V7.9H34.3v10.9H10.7v6h7l6.6,61.8c0.2,2,1.9,3.6,4,3.6h40.4c2,0,3.8-1.5,4-3.6l6.6-61.8h8v-6  H62.7z M40.3,13.9h16.5v4.9H40.3V13.9z M37.7,76.1L37.7,76.1c-1.7,0.1-3.1-1.2-3.2-2.8l-2-36.9c-0.1-1.7,1.2-3.1,2.8-3.2h0  c1.7-0.1,3.1,1.2,3.2,2.8l2,36.9C40.6,74.6,39.3,76,37.7,76.1z M51.5,73.1c0,1.7-1.3,3-3,3s-3-1.3-3-3V36.1c0-1.7,1.3-3,3-3  s3,1.3,3,3V73.1z M62.5,73.2c-0.1,1.7-1.5,2.9-3.2,2.8h0c-1.7-0.1-2.9-1.5-2.8-3.2l2-36.9c0.1-1.7,1.5-2.9,3.2-2.8h0  c1.7,0.1,2.9,1.5,2.8,3.2L62.5,73.2z'></path>
              </svg>
            </IconBox>
          </ButtonDelete>
        )}
      </ControlBox>
    </ListContainer>
  );
};

export default ListRow;

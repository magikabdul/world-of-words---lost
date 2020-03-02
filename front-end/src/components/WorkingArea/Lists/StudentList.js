import React from 'react';
import styled from 'styled-components';
import * as colors from '../../../modules/Colors';

import ListRow from './StudentItem';

const Container = styled.div`
  color: #a9a9a9;
  height: 3.25rem;
  padding: 0.625rem 0rem;
  margin: 0 auto;
  width: 95%;
`;

const StudentList = props => {
  const list = props.students.list;

  const studentList = list.map(student => (
    <ListRow
      key={student.id}
      columnId={student.id}
      studentName={student.lastName + ' ' + student.firstName}
      lastSeen={student.lastSeen}
      lastSeenColor={colors.DEFAULT}
      weekTest={student.weekTests}
      weekScore={student.weekScore}
      weekColor={colors.DEFAULT}
      monthTest={student.monthTests}
      monthScore={student.monthScore}
      monthColor={colors.DEFAULT}
      totalTest={student.totalTests}
      totalScore={student.totalScore}
      totalColor={colors.DEFAULT}
      fontWeight='700'
      icons
      handleStudentUpdate={props.handleStudentUpdate}
      handleStudentDelete={props.handleStudentDelete}
    />
  ));

  return (
    <>
      <Container>
        <ListRow
          background={colors.ROSE}
          color={colors.WHITE}
          columnId='student id'
          studentName='student name'
          lastSeen='last seen'
          weekTest='week tests'
          weekScore='week score'
          monthTest='month tests'
          monthScore='month score'
          totalTest='total tests'
          totalScore='total score'
          hoverBackground={colors.ROSE}
        />
        {studentList}
      </Container>
    </>
  );
};

export default StudentList;

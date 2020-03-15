import React, { Component } from 'react';
import styled from 'styled-components';

import { IconWords, IconCalendar } from '../../modules/images-svg';
import * as colors from '../../modules/Colors';

import { studentService } from '../../services';

import WorkingAreaContainer from '../../components/WorkingArea/WorkingAreaContainer';
import WorkingAreaHeader from '../../components/WorkingArea/WorkingAreaHeader';
import WorkingAreaBoard from '../../components/WorkingArea/WorkingAreaBoard';
import WorkingAreaRow from '../../components/WorkingArea/WorkingAreaRow';
import BoxWithIcon from '../../components/WorkingArea/Boxes/BoxWithIcon';
import HorizontalSpacer from '../../components/HorizontalSpacer/HorizontalSpacer';
import StudentList from '../../components/WorkingArea/Lists/StudentList';
import NewStudent from '../../components/WorkingArea/Lists/NewStudent';

const ButtonAddNewStudent = styled.button`
  height: 3rem;
  padding: 0 2rem;
  border: none;
  border-radius: 5px;
  background: ${colors.INFO};
  color: white;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  margin: 3rem auto 0;
  transition: 1s;
  &:hover {
    box-shadow: 0 14px 26px -12px rgba(153, 153, 153, 0.42),
      0 4px 23px 0px rgba(0, 0, 0, 0.12),
      0 8px 10px -5px rgba(153, 153, 153, 0.2);
  }
`;

export default class ManagerDashboard extends Component {
  state = {
    students: {
      quantity: 2,
      list: [
        // {
        //   id: 1,
        //   firstName: 'Liwia',
        //   lastName: 'Cholewa',
        //   lastSeen: '2020-01-05 11:00',
        //   weekTests: '1 / 7',
        //   weekScore: '60%',
        //   monthTests: '12 / 30',
        //   monthScore: '55%',
        //   totalTests: '123',
        //   totalScore: '30%'
        // }
      ]
    },
    newStudent: {
      showNewStudentBox: true,
      firstName: 'sss',
      lastName: '',
      userName: '',
      password1: '',
      password2: '',
      mail: '',
      errors: ['', '', '', '', '']
    }
  };

  handleStudentUpdate = id => {
    console.log('update of user ' + id);
  };

  handleStudentDelete = id => {
    console.log('delete of user ' + id);
  };

  handleShowAddStudentBox = () => {
    this.setState({
      ...this.state,
      newStudent: {
        ...this.state.newStudent,
        showNewStudentBox: !this.state.newStudent.showNewStudentBox
      }
    });
  };

  handleStudentValues = e => {
    if (e.target.id === 'studentFirstName') {
      this.setState({
        ...this.setState,
        newStudent: {
          ...this.state.newStudent,
          firstName: e.target.value
        }
      });
    }

    if (e.target.id === 'studentLastName') {
      this.setState({
        ...this.setState,
        newStudent: {
          ...this.state.newStudent,
          lastName: e.target.value
        }
      });
    }

    if (e.target.id === 'studentUserName') {
      this.setState({
        ...this.setState,
        newStudent: {
          ...this.state.newStudent,
          userName: e.target.value
        }
      });
    }

    if (e.target.id === 'studentMail') {
      this.setState({
        ...this.setState,
        newStudent: {
          ...this.state.newStudent,
          mail: e.target.value
        }
      });
    }

    if (e.target.id === 'studentPassword1') {
      this.setState({
        ...this.setState,
        newStudent: {
          ...this.state.newStudent,
          password1: e.target.value
        }
      });
    }

    if (e.target.id === 'studentPassword2') {
      this.setState({
        ...this.setState,
        newStudent: {
          ...this.state.newStudent,
          password2: e.target.value
        }
      });
    }
  };

  handleStudentCreate = () => {
    const errors = studentService.validateRegistration(this.state.newStudent);

    this.setState({
      ...this.state,
      newStudent: {
        ...this.state.newStudent,
        errors
      }
    });
  };

  render() {
    return (
      <WorkingAreaContainer>
        <WorkingAreaHeader title='dashboard' name={this.props.name} />
        <WorkingAreaBoard>
          <WorkingAreaRow>
            <BoxWithIcon
              icon={<IconWords />}
              colorStart={colors.blueStart}
              colorEnd={colors.blueEnd}
              title='my students'
              value={this.state.students.quantity}
              units=' students'
              iconMessage={<IconCalendar />}
              message='updated today'
            />
            <BoxWithIcon />
            <BoxWithIcon />
          </WorkingAreaRow>
          <HorizontalSpacer color='rgba(0, 0, 0, 0.1)' />
          <WorkingAreaRow>
            <WorkingAreaHeader title='student list' />
            <StudentList
              students={this.state.students}
              handleStudentUpdate={this.handleStudentUpdate}
              handleStudentDelete={this.handleStudentDelete}
            />
            {!this.state.newStudent.showNewStudentBox && (
              <ButtonAddNewStudent onClick={this.handleShowAddStudentBox}>
                add new student
              </ButtonAddNewStudent>
            )}
            {this.state.newStudent.showNewStudentBox && (
              <NewStudent
                newStudent={this.state.newStudent}
                handleShowAddStudentBox={this.handleShowAddStudentBox}
                handleStudentCreate={this.handleStudentCreate}
                handleStudentValues={this.handleStudentValues}
              />
            )}
          </WorkingAreaRow>
        </WorkingAreaBoard>
      </WorkingAreaContainer>
    );
  }
}

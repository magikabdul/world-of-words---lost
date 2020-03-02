import React, { Component } from 'react';

import { IconWords, IconCalendar } from '../../modules/images-svg';
import * as colors from '../../modules/Colors';

import WorkingAreaContainer from '../../components/WorkingArea/WorkingAreaContainer';
import WorkingAreaHeader from '../../components/WorkingArea/WorkingAreaHeader';
import WorkingAreaBoard from '../../components/WorkingArea/WorkingAreaBoard';
import WorkingAreaRow from '../../components/WorkingArea/WorkingAreaRow';
import BoxWithIcon from '../../components/WorkingArea/Boxes/BoxWithIcon';
import HorizontalSpacer from '../../components/HorizontalSpacer/HorizontalSpacer';
import StudentList from '../../components/WorkingArea/Lists/StudentList';

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
    }
  };

  handleStudentUpdate = id => {
    console.log('update of user ' + id);
  };

  handleStudentDelete = id => {
    console.log('delete of user ' + id);
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
          </WorkingAreaRow>
        </WorkingAreaBoard>
      </WorkingAreaContainer>
    );
  }
}

import React, { Component } from 'react';

import * as colors from '../../../modules/Colors';
import {
  IconCalendar,
  IconWords,
  IconWrite,
  IconErase,
  IconVerify
} from '../../../modules/images-svg';

import WorkingAreaContainer from '../../../components/WorkingArea/WorkingAreaContainer';
import WorkingAreaHeader from '../../../components/WorkingArea/WorkingAreaHeader';
import WorkingAreaBoard from '../../../components/WorkingArea/WorkingAreaBoard';
import WorkingAreaRow from '../../../components/WorkingArea/WorkingAreaRow';
import BoxWithIcon from '../../../components/WorkingArea/Boxes/BoxWithIcon';
import HorizontalSpacer from '../../../components/HorizontalSpacer/HorizontalSpacer';
import ManagerArea from '../../WorkingAreas/WordsDatabase/ManagerArea';

export default class WordsDatabase extends Component {
  state = {
    database: {
      size: 0,
      update: Date.now()
    }
  };

  render() {
    return (
      <WorkingAreaContainer>
        <WorkingAreaHeader title='words database' name={this.props.name} />
        <WorkingAreaBoard>
          <WorkingAreaRow>
            <BoxWithIcon
              icon={<IconWords />}
              colorStart={colors.orangeStart}
              colorEnd={colors.orangeEnd}
              title='database size'
              value={this.state.database.size}
              units=' words'
              iconMessage={<IconCalendar />}
              message='updated today'
            />
            <BoxWithIcon
              colorStart={colors.greenStart}
              colorEnd={colors.greenEnd}
              title='newest word'
              message='added by'
            />
            <BoxWithIcon
              colorStart={colors.blueStart}
              colorEnd={colors.blueEnd}
              title='most active manager'
              message='last seen'
            />
          </WorkingAreaRow>
          <HorizontalSpacer color='rgba(0, 0, 0, 0.1)' />
          <WorkingAreaRow>
            <ManagerArea
              headerTitle='Tasks: '
              colorStart={colors.violetStart}
              colorEnd={colors.violetEnd}
              modesNumber={3}
              modeName1='add'
              modeIcon1={<IconWrite />}
              modeName2='check'
              modeIcon2={<IconVerify />}
              modeName3='remove'
              modeIcon3={<IconErase />}
            ></ManagerArea>
          </WorkingAreaRow>
        </WorkingAreaBoard>
      </WorkingAreaContainer>
    );
  }
}

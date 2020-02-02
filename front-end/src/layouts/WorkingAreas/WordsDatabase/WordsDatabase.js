import React, { Component } from 'react';

import * as color from '../../../modules/Colors';
import {
  IconCalendar,
  IconWords,
  IconWrite,
  IconErase,
  IconVerify
} from '../../../images/images-svg';

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
              colorStart={color.orangeStart}
              colorEnd={color.orangeEnd}
              title='database size'
              value={this.state.database.size}
              units=' words'
              iconMessage={<IconCalendar />}
              message='updated today'
            />
            <BoxWithIcon
              colorStart={color.greenStart}
              colorEnd={color.greenEnd}
              title='newest word'
              message='added by'
            />
            <BoxWithIcon
              colorStart={color.blueStart}
              colorEnd={color.blueEnd}
              title='most active manager'
              message='last seen'
            />
          </WorkingAreaRow>
          <HorizontalSpacer color='rgba(0, 0, 0, 0.1)' />
          <WorkingAreaRow>
            <ManagerArea
              headerTitle='Tasks: '
              colorStart={color.violetStart}
              colorEnd={color.violetEnd}
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

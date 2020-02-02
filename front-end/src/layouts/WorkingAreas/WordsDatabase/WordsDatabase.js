import React, { Component } from 'react';

import * as color from '../../../modules/Colors';
import { IconCalendar, IconWords } from '../../../images/images-svg';

import WorkingAreaContainer from '../../../components/WorkingArea/WorkingAreaContainer';
import WorkingAreaHeader from '../../../components/WorkingArea/WorkingAreaHeader';
import WorkingAreaBoard from '../../../components/WorkingArea/WorkingAreaBoard';
import WorkingAreaRow from '../../../components/WorkingArea/WorkingAreaRow';
import BoxWithIcon from '../../../components/WorkingArea/Boxes/BoxWithIcon';

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
              colorStart={color.violetStart}
              colorEnd={color.violetEnd}
              title='database size'
              value={this.state.database.size}
              units=' words'
              iconMessage={<IconCalendar />}
              message='updated today'
            />
            <BoxWithIcon />
            <BoxWithIcon />
          </WorkingAreaRow>
        </WorkingAreaBoard>
      </WorkingAreaContainer>
    );
  }
}

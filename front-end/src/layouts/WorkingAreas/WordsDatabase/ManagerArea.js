import React, { Component } from 'react';

import * as color from '../../../modules/Colors';

import BoxWithHeaderControls from '../../../components/WorkingArea/Boxes/BoxWithHeaderControls';
import FormAddWord from '../../../components/WorkingArea/Forms/FormAddWord';

export default class ManagerArea extends Component {
  state = {
    modeSelected: 1
  };

  handleMode = id => {
    this.setState({
      modeSelected: id
    });
  };

  render() {
    return (
      <BoxWithHeaderControls
        headerTitle={this.props.headerTitle}
        modesNumber={this.props.modesNumber}
        modeSelected={this.state.modeSelected}
        colorStart={this.props.colorStart}
        colorEnd={this.props.colorEnd}
        modeName1={this.props.modeName1}
        modeIcon1={this.props.modeIcon1}
        modeName2={this.props.modeName2}
        modeIcon2={this.props.modeIcon2}
        modeName3={this.props.modeName3}
        modeIcon3={this.props.modeIcon3}
        handleMode={this.handleMode}
        formType1={
          <FormAddWord
            title='add word'
            icon={this.props.modeIcon1}
            colorStart={color.redStart}
            colorEnd={color.redEnd}
          />
        }
      ></BoxWithHeaderControls>
    );
  }
}

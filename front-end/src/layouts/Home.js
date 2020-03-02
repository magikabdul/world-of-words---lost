import React, { Component } from 'react';
import styled from 'styled-components';

import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Menu from '../layouts/Menu/Menu';

import WordsDatabase from '../layouts/WorkingAreas/WordsDatabase/WordsDatabase';
import ManagerDashboard from '../layouts/WorkingAreas/ManagerDashboard';

const Container = styled.div`
  display: flex;
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 0
    };
  }

  setMode = mode => {
    this.setState({
      ...this.state,
      mode
    });
  };

  render() {
    const { id, isLogged, name } = this.props.user;

    return (
      <>
        {!isLogged && <Header isLogged={isLogged} name={name} />}
        {!isLogged && <Hero />}

        <Container>
          {isLogged && (
            <Menu
              mode={this.state.mode}
              setMode={this.setMode}
              handleLogout={this.props.handleLogout}
            />
          )}

          {isLogged && this.state.mode === 0 && (
            <ManagerDashboard name={name} mode={this.state.mode} />
          )}

          {isLogged && this.state.mode === 2 && (
            <WordsDatabase name={name} mode={this.state.mode} />
          )}
        </Container>
      </>
    );
  }
}

export default Home;

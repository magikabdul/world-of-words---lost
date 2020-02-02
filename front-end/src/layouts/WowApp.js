import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../layouts/Home';
import ErrorPage from '../pages/Error/Error';
import LoginPage from '../layouts/Login/Login';
import RegisterPage from '../layouts/Register/Register';
// import Dictionary from '../layouts/Admin/Dictionary/Dictionary';

class WowApplication extends Component {
  state = {
    user: {
      name: 'magikabdul',
      isLogged: true,
      isSuperUser: false
    }
  };

  handleAuthorization = prevState =>
    this.setState({
      user: {
        name: 'magikabdul',
        isLogged: !prevState.user.isLogged,
        isSuperUser: true
      }
    });

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <HomePage
              isLogged={this.state.user.isLogged}
              name={this.state.user.name}
              isSuperUser={this.state.user.isSuperUser}
              handleAuthorization={this.handleAuthorization}
            />
          </Route>

          <Route path='/login'>
            <LoginPage
              isLogged={this.state.user.isLogged}
              name={this.state.user.name}
            />
          </Route>

          <Route path='/register'>
            <RegisterPage
              isLogged={this.state.user.isLogged}
              name={this.state.user.name}
            />
          </Route>

          {/* <Route path='/admin'>
            <Dictionary
              isLogged={this.state.user.isLogged}
              name={this.state.user.name}
              isSuperUser={this.state.user.isSuperUser}
            />
          </Route> */}

          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default WowApplication;

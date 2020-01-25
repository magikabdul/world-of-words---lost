import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../layouts/Home';
import ErrorPage from '../pages/Error';

class WowApplication extends Component {
  state = {
    user: {
      name: '',
      isLogged: false
    }
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <HomePage
              isLogged={this.state.user.isLogged}
              name={this.state.user.name}
            />
          </Route>

          <Route path='/login'></Route>

          <Route path='/register'></Route>

          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default WowApplication;

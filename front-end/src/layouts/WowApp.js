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
      id: 0,
      name: '',
      isLogged: false,
      isSuperUser: false
    }
  };

  handleAuthorization = (id, form) => {
    sessionStorage.setItem('id', id);
    sessionStorage.setItem('user', btoa(form.userName));
    sessionStorage.setItem('param', btoa(form.password));
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        name: form.userName,
        isLogged: true,
        id: id
      }
    });
  };

  handleLogout = () => {
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('param');
    this.setState({
      user: {
        id: 0,
        name: '',
        isLogged: false,
        isSuperUser: false
      }
    });
  };

  componentDidMount() {
    if (sessionStorage.getItem('user') !== null) {
      this.setState({
        ...this.state,
        user: {
          ...this.state.user,
          id: sessionStorage.getItem('id'),
          name: atob(sessionStorage.getItem('user')),
          isLogged: true
        }
      });
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <HomePage handleLogout={this.handleLogout} user={this.state.user} />
          </Route>

          <Route path='/login'>
            <LoginPage
              id={this.state.user.id}
              isLogged={this.state.user.isLogged}
              name={this.state.user.name}
              handleAuthorization={this.handleAuthorization}
            />
          </Route>

          <Route path='/register'>
            <RegisterPage
              isLogged={this.state.user.isLogged}
              name={this.state.user.name}
            />
          </Route>

          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default WowApplication;

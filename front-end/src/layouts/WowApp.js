import React, { Component } from "react";

import { BrowserRouter } from "react-router-dom";

import Header from "./Header.js";

import CssBaseline from "@material-ui/core/CssBaseline";

class WowApplication extends Component {
  state = {
    user: {
      name: "",
      isLogged: false
    }
  };

  render() {
    return (
      <BrowserRouter>
        <CssBaseline />
        <Header isLogged={this.state.user.isLogged} />
      </BrowserRouter>
    );
  }
}

export default WowApplication;

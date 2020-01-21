import React, { Component } from "react";

import { BrowserRouter } from "react-router-dom";

class WowApplication extends Component {
  state = {
    user: {
      name: "",
      isLogged: false
    }
  };

  render() {
    return <BrowserRouter></BrowserRouter>;
  }
}

export default WowApplication;

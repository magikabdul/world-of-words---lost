import React from "react";
import { Route, Switch } from "react-router-dom";

import AppBarDefault from "../components/AppBarDefault.js";
import AppBarLogged from "../components/AppBarLogged.js";

const Header = props => {
  const { isLogged } = props;

  return <>{isLogged ? <AppBarLogged /> : <AppBarDefault />}</>;
};

export default Header;

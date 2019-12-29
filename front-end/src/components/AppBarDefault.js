import React from "react";

import logo from "../images/words_icon.png";

import { makeStyles } from "@material-ui/core/styles";

import { AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  flex: {
    display: "flex"
  },
  grow: {
    flexGrow: 1
  },
  bar: {
    background: "black"
  },
  image: {
    maxHeight: "2.2rem",
    margin: "0 15px 0 0"
  },
  title: {
    textTransform: "uppercase",
    fontWeight: 500,
    fontSize: "1.5rem"
  }
}));

const AppBarDefault = props => {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar>
        <Toolbar className={classes.bar}>
          <img className={classes.image} src={logo} alt="application logo" />

          <Typography className={classes.title} varinat="h6" noWrap>
            World of Words
          </Typography>
          <div className={classes.grow}></div>
          <Typography edge="end">SIGN IN</Typography>
          <Typography>SIGN UP</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppBarDefault;

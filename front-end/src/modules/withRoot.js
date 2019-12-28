import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

function withRoot(Component) {
  function WithRoot(props) {
    return (
      <>
        <CssBaseline />
        <Component {...props} />
      </>
    );
  }
  return WithRoot;
}

export default withRoot;

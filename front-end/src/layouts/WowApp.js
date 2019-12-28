import withRoot from "../modules/withRoot.js";

import React from "react";

import ApplicationBar from "../components/ApplicationBar.js";

function Index() {
  return (
    <>
      <ApplicationBar />
      <span>appwow</span>
    </>
  );
}

export default withRoot(Index);

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoadableVisibility from "react-loadable-visibility/react-loadable";

import "styles/index";

import LoadingComponent from "components/Loading";

const AsyncAppContainer = LoadableVisibility({
  loader: () => import("containers/App"),
  loading: LoadingComponent
});

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={AsyncAppContainer} />
    </div>
  </Router>,
  document.getElementById("root")
);

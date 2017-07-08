import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Functions from "./pages/Functions";
import Model from "./pages/Model";
import Layout from "./pages/Layout";
import Elements from "./pages/Elements";
import Systems from "./pages/Systems";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Model}></IndexRoute>
      <Route path="functions(/:article)" name="functions" component={Functions}></Route>
      <Route path="elements" name="elements" component={Elements}></Route>
      <Route path="systems" name="systems" component={Systems}></Route>
    </Route>
  </Router>,
app);

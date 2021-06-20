import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import Dashboard from "./Dashboard/dashboard";
import Login from "./Login/login";
import Poll from "./Poll/poll";

export default function routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} exact></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/poll/:task_id" component={Poll}></Route>
      </Switch>
    </Router>
  );
}

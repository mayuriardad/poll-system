import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard/dashboard";
import Login from "./Login/login";
import Poll from "./Poll/poll";
import PollDetails from "./Poll/pollDetails";
import PollLink from "./Poll/pollLink";

export default function routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} exact></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/poll/:task_id" component={Poll}></Route>
        <Route path="/pollDetails/:task_id" component={PollDetails}></Route>
        <Route path="/poll-link/:pollDetails" component={PollLink}></Route>
      </Switch>
    </Router>
  );
}

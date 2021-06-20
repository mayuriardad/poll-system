import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import Login from "./Login/login";

export default function routes() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Login />
        </Route>
        <Route path="/about">
          <App />
        </Route>
      </Switch>
    </Router>
  );
}

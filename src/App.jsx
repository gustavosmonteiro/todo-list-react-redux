import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Projects from "./pages/Projects";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header";
import Loading from "./components/Loading";

export default () => (
  <div>
    <Loading />
    <Router>
      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <PrivateRoute path="/">
          <Header />
          <Projects />
        </PrivateRoute>
      </Switch>
    </Router>
  </div>
);

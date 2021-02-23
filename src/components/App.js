import React, { useState, useEffect, useCallback, Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./Navigation";
import LandingPage from "./Landing.js";
import SignUpPage from "./SignUp";
import SignInPage from "./SignIn";
import PasswordForgetPage from "./PasswordForget";
import HomePage from "./Home";
import AccountPage from "./Account";
import AdminPage from "./Admin";

import * as ROUTES from "../constants/routes";
import { withFirebase } from "./Firebase/index";

const App = (props) => {
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const handleStatusChange = (authUser) => {
      authUser ? setAuthUser(authUser) : setAuthUser(null);
    };
    props.firebase.auth.onAuthStateChanged(handleStatusChange);
    return () => {
      props.firebase.auth.onAuthStateChanged(handleStatusChange);
    };
  });

  return (
    <Router>
      <div>
        <Navigation authUser={authUser} />
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
      </div>
    </Router>
  );
};

export default withFirebase(App);

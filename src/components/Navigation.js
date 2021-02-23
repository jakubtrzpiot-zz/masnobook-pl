import React from "react";
import "./Navigation.scss";
import { Link } from "react-router-dom";

import SignOutButton from "./SignOut";
import * as ROUTES from "../constants/routes";

const Navigation = ({ authUser }) => (
  <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);
const NavigationAuth = () => (
  <div className='signContain'>
    <div className='signedIn'>
      <Link to={ROUTES.LANDING}>Landing</Link>
      <br></br>
      <Link to={ROUTES.HOME}>Home</Link>
      <br></br>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
      <br></br>
      <SignOutButton />
    </div>
  </div>
);
const NavigationNonAuth = () => (
  <div className='signContain'>
    <div className='signedOut'>
      <Link to={ROUTES.LANDING}>Landing</Link>
      <br></br>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </div>
  </div>
);

export default Navigation;

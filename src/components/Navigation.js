import React from "react";
import "./Navigation.scss";
import { Link } from "react-router-dom";
import logo from "../constants/masnobook-logo.png";

import SignOutButton from "./SignOut";
import * as ROUTES from "../constants/routes";

const Navigation = ({ authUser }) => (
  <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);
const NavigationAuth = () => {
  return (
    <>
      <div className='signContain'>
        <div className='logo'>
          <Link to={ROUTES.HOME}>
            <img src={logo} alt='masnobook' />
          </Link>
        </div>
        <div className='signedIn'>
          <Link to={ROUTES.LANDING}>Landing</Link>
          <br></br>
          <Link to={ROUTES.ACCOUNT}>Account</Link>
          <br></br>
          <SignOutButton />
        </div>
      </div>
    </>
  );
};
const NavigationNonAuth = () => (
  <div className='signContain'>
    <div className='logo'>
      <Link to={ROUTES.LANDING}>
        <img src={logo} alt='masnobook' />
      </Link>
    </div>
    <div className='signedOut'>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </div>
  </div>
);

export default Navigation;

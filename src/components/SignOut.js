import React from "react";
import "./SignOut.scss";
import { withFirebase } from "./Firebase/index";

const SignOutButton = ({ firebase }) => (
  <a className='SignOutButton' onClick={firebase.doSignOut}>
    Wyloguj się
  </a>
);

export default withFirebase(SignOutButton);

import React from 'react';
import './signout.scss';
import { withFirebase } from '../Firebase/index';

const SignOutButton = ({ firebase }) => (
	<button className="SignOutButton" onClick={firebase.doSignOut}>
		Logout
	</button>
);

export default withFirebase(SignOutButton);

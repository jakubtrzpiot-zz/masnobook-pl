import React from 'react';
import './signout.scss';
import { withFirebase } from './Firebase/index';

const SignOutButton = ({ firebase }) => (
	<p className="SignOutButton" onClick={firebase.doSignOut}>
		Logout
	</p>
);

export default withFirebase(SignOutButton);

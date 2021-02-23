import React from 'react';
import './signout.scss';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase/index';
import * as ROUTES from '../../constants/routes';

const SignOutButton = (props) => {
	const signOut = () => {
		props.firebase.doSignOut();
		props.history.push(ROUTES.LANDING);
	};
	return (
		<p className="SignOutButton" onClick={signOut}>
			Logout
		</p>
	);
};

export default withRouter(withFirebase(SignOutButton));

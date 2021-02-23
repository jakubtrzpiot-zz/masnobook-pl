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
		<button className="SignOutButton" onClick={signOut}>
			Logout
		</button>
	);
};

export default withRouter(withFirebase(SignOutButton));

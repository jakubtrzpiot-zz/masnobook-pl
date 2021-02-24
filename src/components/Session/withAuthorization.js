import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import AuthUserContext from './context';
import * as ROUTES from '../../constants/routes';

const withAuthorization = (condition) => (Component) => {
	const WithAuthorization = (props) => {
		useEffect(() => {
			const handleAuthStatus = (authUser) => {
				if (!condition(authUser)) {
					props.history.push(ROUTES.SIGN_IN);
				}
			};
			props.firebase.auth.onAuthStateChanged(handleAuthStatus);
			return () => props.firebase.auth.onAuthStateChanged(handleAuthStatus);
		});

		return (
			<AuthUserContext.Consumer>
				{(authUser) => (condition(authUser) ? <Component {...props} /> : null)}
			</AuthUserContext.Consumer>
		);
	};
	return withRouter(withFirebase(WithAuthorization));
};

export default withAuthorization;

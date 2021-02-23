import React, { useState, useEffect } from 'react';

import AuthUserContext from './context';
import { withFirebase } from '../Firebase/index';

const withAuthentication = (Component) => {
	const Authentication = (props) => {
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
			<AuthUserContext.Provider value={authUser}>
				<Component {...props} />
			</AuthUserContext.Provider>
		);
	};
	return withFirebase(Authentication);
};

export default withAuthentication;

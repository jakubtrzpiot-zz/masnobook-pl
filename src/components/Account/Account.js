import React from 'react';
import './account.scss';

import { AuthUserContext, withAuthorization } from '../Session';

const AccountPage = () => {
	return (
		<AuthUserContext.Consumer>
			{(authUser) => (
				<div>
					<h1>Email: {authUser.email}</h1>
					<h1>Uid: {authUser.uid}</h1>
					<h1>Username: {authUser.username}</h1>
				</div>
			)}
		</AuthUserContext.Consumer>
	);
};
const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(AccountPage);

import React from 'react';
import './admin.scss';

// import * as ROLES from '../../constants/roles';
import { withAuthorization } from '../Session/index';

const AdminPage = () => {
	return (
		<>
			<div className="Container">
				<h1>Admin</h1>
				<p>Restricted area! Only users with the admin role are authorized.</p>
			</div>
		</>
	);
};

const condition = (authUser) => !!authUser;
// const condition = (authUser) => authUser && !!authUser.roles[ROLES.ADMIN];

export default withAuthorization(condition)(AdminPage);

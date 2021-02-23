import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.scss';
import logo from '../../constants/masnobook-logo.png';

import SignOutButton from '../SignOut/SignOut';
import * as ROUTES from '../../constants/routes';

import { AuthUserContext } from '../Session/index';

const Navigation = () => (
	<div>
		<AuthUserContext.Consumer>
			{(authUser) => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
		</AuthUserContext.Consumer>
	</div>
);

const NavigationAuth = () => {
	return (
		<>
			<div className="signContain">
				<div className="logo">
					<Link to={ROUTES.HOME}>
						<img className="logo" height="100vh" src={logo} alt="masnobook" />
					</Link>
				</div>
				<div className="signedIn">
					<Link to={ROUTES.LANDING}>Landing</Link>
					<br></br>
					<Link to={ROUTES.ACCOUNT}>Account</Link>
					<br></br>
					<Link to={ROUTES.ADMIN}>Admin</Link>
					<br></br>
					<SignOutButton />
				</div>
			</div>
		</>
	);
};
const NavigationNonAuth = () => (
	<div className="signContain">
		<div className="logo">
			<Link to={ROUTES.LANDING}>
				<img className="logo" height="100vh" src={logo} alt="masnobook" />
			</Link>
		</div>
		<div className="signedOut">
			<Link to={ROUTES.SIGN_IN}>Sign In</Link>
		</div>
	</div>
);

export default Navigation;

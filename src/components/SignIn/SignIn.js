import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './signin.scss';

import { SignUpLink } from '../SignUp/SignUp';
import { withFirebase } from '../Firebase/index';
import * as ROUTES from '../../constants/routes';

const SignInPage = () => {
	return (
		<div className="Container">
			<div className="signInForm">
				<br></br>
				<h1>Zaloguj się</h1>
				<br></br>
				<SignInForm />
				<SignUpLink />
			</div>
		</div>
	);
};

const SignInFormBase = (props) => {
	const [state, setState] = useState({ email: '', password: '', err: null });

	const onSubmit = (e) => {
		const { email, password } = state;

		props.firebase
			.doSignInWithEmailAndPassword(email, password)
			.then(() => {
				setState({ ...state });
				props.history.push(ROUTES.HOME);
			})
			.catch((err) => {
				setState({ err });
			});

		e.preventDefault();
	};

	const onChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	const { email, password, err } = state;

	const isInvalid = password === '' || email === '';

	return (
		<form className="signInForm" onSubmit={onSubmit}>
			<input
				name="email"
				value={email}
				type="text"
				onChange={onChange}
				placeholder="Email"
			/>
			<br></br>
			<input
				name="password"
				value={password}
				type="password"
				onChange={onChange}
				placeholder="Hasło"
			/>
			<br></br>
			<button disabled={isInvalid} type="submit">
				Zaloguj się
			</button>

			{err && <p>{err.message}</p>}
		</form>
	);
};

const SignInLink = () => {
	return (
		<>
			Masz już konto?{' '}
			<Link to={ROUTES.SIGN_IN}>
				<b>Zaloguj się</b>
			</Link>
		</>
	);
};

const SignInForm = withRouter(withFirebase(SignInFormBase));

export default SignInPage;

export { SignInForm, SignInLink };

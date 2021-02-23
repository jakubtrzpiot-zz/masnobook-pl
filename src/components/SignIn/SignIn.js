import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { SignUpLink } from '../SignUp/SignUp';
import { withFirebase } from '../Firebase/index';
import * as ROUTES from '../../constants/routes';

const SignInPage = () => {
	return (
		<div>
			<h1>Zaloguj Się</h1>
			<SignInForm />
			<SignUpLink />
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
		<form onSubmit={onSubmit}>
			<input
				name="email"
				value={email}
				type="text"
				onChange={onChange}
				placeholder="Email"
			/>
			<input
				name="password"
				value={password}
				type="password"
				onChange={onChange}
				placeholder="Hasło"
			/>
			<button disabled={isInvalid} type="submit">
				Zaloguj Się
			</button>

			{err && <p>{err.message}</p>}
		</form>
	);
};

const SignInLink = () => {
	return (
		<>
			Masz już konto? <Link to={ROUTES.SIGN_IN}>Zaloguj Się</Link>
		</>
	);
};

const SignInForm = withRouter(withFirebase(SignInFormBase));

export default SignInPage;

export { SignInForm, SignInLink };

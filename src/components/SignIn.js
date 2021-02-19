import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { SignUpLink } from './SignUp';
import { withFirebase } from './Firebase/index';
import * as ROUTES from '../constants/routes';

const SignInPage = () => {
	return (
		<div>
			<h1>Zaloguj Się</h1>
			<SignInForm />
			<SignUpLink />
		</div>
	);
};

const INITIAL_STATE = {
	email: '',
	password: '',
	err: null,
};

class SignInFormBase extends Component {
	constructor(props) {
		super(props);

		this.state = { ...INITIAL_STATE };
	}

	onSubmit = (e) => {
		const { email, password } = this.state;

		this.props.firebase
			.doSignInWithEmailAndPassword(email, password)
			.then(() => {
				this.setState({ ...INITIAL_STATE });
				this.props.history.push(ROUTES.HOME);
			})
			.catch((error) => {
				this.setState({ error });
			});

		e.preventDefault();
	};

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		const { email, password, err } = this.state;

		const isInvalid = password === '' || email === '';

		return (
			<form onSubmit={this.onSubmit}>
				<input
					name="email"
					value={email}
					type="text"
					onChange={this.onChange}
					placeholder="Email"
				/>
				<input
					name="password"
					value={password}
					type="password"
					onChange={this.onChange}
					placeholder="Hasło"
				/>
				<button disabled={isInvalid} type="submit">
					Zaloguj Się
				</button>

				{err && <p>{err.message}</p>}
			</form>
		);
	}
}

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

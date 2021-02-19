import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { SignInLink } from './SignIn';
import { withFirebase } from './Firebase/index';
import * as ROUTES from '../constants/routes';

const SignUpPage = () => {
	return (
		<div>
			<h1>Zarejestruj Się</h1>
			<SignUpForm />
			<SignInLink />
		</div>
	);
};

const INITIAL_STATE = {
	username: '',
	email: '',
	password: '',
	repassword: '',
	err: null,
};

class SignUpFormBase extends Component {
	constructor(props) {
		super(props);

		this.state = { ...INITIAL_STATE };
	}

	onSubmit = (e) => {
		const { username, email, password } = this.state;

		this.props.firebase
			.doCreateUserWithEmailAndPassword(email, password)
			.then((authUser) => {
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
		const { username, email, password, repassword, err } = this.state;

		const isInvalid =
			password !== repassword ||
			password === '' ||
			email === '' ||
			username === '';

		return (
			<form onSubmit={this.onSubmit}>
				<input
					name="username"
					value={username}
					onChange={this.onChange}
					placeholder="Nazwa użytkownika"
				/>
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
				<input
					name="repassword"
					value={repassword}
					type="password"
					onChange={this.onChange}
					placeholder="Powtórz hasło"
				/>
				<button disabled={isInvalid} type="submit">
					Zarejestruj się
				</button>

				{err && <p>{err.message}</p>}
			</form>
		);
	}
}

const SignUpLink = () => {
	return (
		<>
			Nie masz konta? <Link to={ROUTES.SIGN_UP}>Zarejestruj się</Link>
		</>
	);
};

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink };

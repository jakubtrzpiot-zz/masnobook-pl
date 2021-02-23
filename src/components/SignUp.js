import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "./signUp.scss";

import { SignInLink } from "./SignIn";
import { withFirebase } from "./Firebase/index";
import * as ROUTES from "../constants/routes";

const SignUpPage = () => {
  return (
    <div className='Container'>
      <div className='signUpForm'>
        <h1>Zarejestruj Się</h1>
        <SignUpForm />
        <SignInLink />
      </div>
    </div>
  );
};

const SignUpFormBase = (props) => {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    repassword: "",
    err: null,
  });

  const onSubmit = (e) => {
    const { username, email, password } = state;

    props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        setState({ ...state });
        props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({ error });
      });

    e.preventDefault();
  };

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const { username, email, password, repassword, err } = state;

  const isInvalid =
    password !== repassword ||
    password === "" ||
    email === "" ||
    username === "";

  return (
    <form className='signUpForm' onSubmit={onSubmit}>
      <input
        name='username'
        value={username}
        onChange={onChange}
        placeholder='Nazwa użytkownika'
      />
      <input
        name='email'
        value={email}
        type='text'
        onChange={onChange}
        placeholder='Email'
      />
      <input
        name='password'
        value={password}
        type='password'
        onChange={onChange}
        placeholder='Hasło'
      />
      <input
        name='repassword'
        value={repassword}
        type='password'
        onChange={onChange}
        placeholder='Powtórz hasło'
      />
      <button disabled={isInvalid} type='submit'>
        Zarejestruj się
      </button>

      {err && <p>{err.message}</p>}
    </form>
  );
};

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

import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Field from './Field';

import './connexion.scss'

const SignIn = ({
  username,
  password,
  changeField,
  handleSignIn,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSignIn();
  };
  return (
    <div className="signIn">
      <form onSubmit={handleSubmit} className="signIn__form">
        <div className="signIn__form__field">
          <Field
            name="username"
            placeholder="Pseudo"
            value={username}
            onChange={changeField}
          />
          <Field
            name="password"
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={changeField}
          />
        </div>
        <div>
          <NavLink to="/inscription" exact>
            <div className="signUpRedirection">Pas encore de compte ?</div>
          </NavLink>
          <button type="submit">
            Connexion
          </button>
        </div>
      </form>
    </div>
  );
};

SignIn.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleSignIn: PropTypes.func.isRequired,
};
export default SignIn;

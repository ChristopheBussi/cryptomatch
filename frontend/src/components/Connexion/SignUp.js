import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Field from './Field';

const SignUp = ({
  username,
  email,
  password,
  changeField,
  handleSignUp,
  message,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSignUp();
  };

  return (
    <div className="signUp">
      <h2>Créer votre compte !</h2>
      <div className="message">{message}</div>
        <form onSubmit={handleSubmit} className="signUp__form">
          <div className="signUp__form__field">
            <Field
              name="username"
              placeholder="Pseudo"
              value={username}
              onChange={changeField}
            />
            <Field
              name="email"
              placeholder="Email"
              value={email}
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
            <NavLink to="/connexion" exact>
              <div className="signUpRedirection">déjà inscrit ?</div>
            </NavLink>
            <button type="submit">
              Inscription
            </button>
          </div>
        </form>
    </div>
  );
};

SignUp.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleSignUp: PropTypes.func.isRequired,
  message: PropTypes.string,
};
export default SignUp;

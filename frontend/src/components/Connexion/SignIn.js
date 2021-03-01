import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Field from './Field';

const SignIn = ({
  username,
  password,
  changeField,
  handleSignIn,
  message,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSignIn();
  };
  return (
    <div className="signIn">
      <h2>Ravi de vous revoir !</h2>
      <div className="message">{message}</div>
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
            <div className="signInRedirection">Pas encore de compte ?</div>
          </NavLink>
          <button type="submit">
            Connexion
          </button>
          <NavLink to="/recuperationMdp" exact>
            <div className="signInRedirection">Mot de passe perdu ?</div>
          </NavLink>
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
  message: PropTypes.string.isRequired,
};
export default SignIn;

import React from 'react';
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
      <div className="message">{message}</div>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">
          Inscription
        </button>
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
  message: PropTypes.string.isRequired,
};
export default SignUp;

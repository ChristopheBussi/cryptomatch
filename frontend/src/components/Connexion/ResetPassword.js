import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Field from './Field';

const ResetPassword = ({
  username,
  changeField,
  handleResetPass,
  message,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleResetPass();
  };
  return (
    <div className="resetPassword">
      <h2>Entrez votre pseudo pour reinitialiser pour votre mot de passe</h2>
      <div className="message">{message}</div>
      <form onSubmit={handleSubmit} className="resetPassword__form">
        <div className="resetPassword__form__field">
          <Field
            name="username"
            placeholder="username"
            value={username}
            onChange={changeField}
          />
        </div>
        <div>
          <button type="submit">
            Réinitialiser mon mot de passe
          </button>
        </div>
      </form>
    </div>
  );
};

ResetPassword.propTypes = {
  username: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleResetPass: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};
export default ResetPassword;

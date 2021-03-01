import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Field from './Field';

const NewPassword = ({
  newPassword,
  newPasswordVerify,
  changeField,
  handleChangePass,
  message,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleChangePass();
  };
  return (
    <div className="newPass">
      <h2>Entrez votre nouveaux mot de passe</h2>
      <div className="message">{message}</div>
      <form onSubmit={handleSubmit} className="newPass__form">
        <div className="newPass__form__field">
          <Field
            name="newPassword"
            placeholder="Mot de passe"
            value={newPassword}
            onChange={changeField}
          />
           <Field
            name="newPasswordVerify"
            placeholder="Confirmer votre mot de passe"
            value={newPasswordVerify}
            onChange={changeField}
          />
        </div>
        <div>
          <button type="submit">
            Changer de mot de passe
          </button>
        </div>
      </form>
    </div>
  );
};

NewPassword.propTypes = {
  newPassword: PropTypes.string.isRequired,
  newPasswordVerify: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleChangePass: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};
export default NewPassword;

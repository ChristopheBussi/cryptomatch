import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';

const SignIn = ({ username, password, changeField }) => (
  <div className="signIn">
    <form>
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
    </form>
  </div>
);

SignIn.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
};
export default SignIn;

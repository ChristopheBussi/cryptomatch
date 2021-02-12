import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';

const SignUp = ({
  username,
  lastname,
  firstname,
  email,
  password,
  changeField,
}) => (
  <div className="signUp">
    <form>
      <Field
        name="username"
        placeholder="Pseudo"
        value={username}
        onChange={changeField}
      />
      <Field
        name="lastname"
        placeholder="Nom"
        value={lastname}
        onChange={changeField}
      />
      <Field
        name="firstname"
        placeholder="Prenom"
        value={firstname}
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
    </form>
  </div>
);

SignUp.propTypes = {
  username: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
};
export default SignUp;

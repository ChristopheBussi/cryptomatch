import React from 'react';
import PropTypes from 'prop-types';

import SignIn from './SignIn';
import SignUp from './SignUp';
// import SignUp from './SignUp';

const Connexion = ({
  page,
  username,
  password,
  changeField,
}) => {
  const isSignIn = page === 'signIn' ? <SignIn username={username} password={password} changeField={changeField} /> : <SignUp />;

  return (
    <div className="connexion">
      {isSignIn}
    </div>
  );
};

Connexion.propTypes = {
  page: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
};
export default Connexion;

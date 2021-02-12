import React from 'react';
import PropTypes from 'prop-types';

import SignIn from './SignIn';
import SignUp from './SignUp';
// import SignUp from './SignUp';

const Connexion = ({
  page,
  usernameSignIn,
  passwordSignIn,
  usernameSignUp,
  passwordSignUp,
  lastname,
  firstname,
  email,
  changeFieldSignIn,
  changeFieldSignUp,
}) => {
  const isSignIn = page === 'signIn'
    ? (
      <SignIn
        username={usernameSignIn}
        password={passwordSignIn}
        changeField={changeFieldSignIn}
      />
    )
    : (
      <SignUp
        username={usernameSignUp}
        lastname={lastname}
        firstname={firstname}
        email={email}
        password={passwordSignUp}
        changeField={changeFieldSignUp}
      />
    );

  return (
    <div className="connexion">
      {isSignIn}
    </div>
  );
};

Connexion.propTypes = {
  page: PropTypes.string.isRequired,
  usernameSignIn: PropTypes.string.isRequired,
  usernameSignUp: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  passwordSignIn: PropTypes.string.isRequired,
  passwordSignUp: PropTypes.string.isRequired,
  changeFieldSignIn: PropTypes.func.isRequired,
  changeFieldSignUp: PropTypes.func.isRequired,
};
export default Connexion;

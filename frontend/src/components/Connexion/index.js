import React from 'react';
import PropTypes from 'prop-types';

import SignIn from './SignIn';
import SignUp from './SignUp';

import './connexion.scss'

const Connexion = ({
  // le path de la page courante
  page,
  // page connexion
  usernameSignIn,
  passwordSignIn,
  changeFieldSignIn,
  handleSignIn,
  // page inscription
  message,
  handleSignUp,
  usernameSignUp,
  passwordSignUp,
  passwordVerifySignUp,
  email,
  changeFieldSignUp,
  handleDiplayMessage,
}) => {
  const componentToDisplayed = page === 'signIn'
    ? (
      <SignIn
        username={usernameSignIn}
        password={passwordSignIn}
        changeField={changeFieldSignIn}
        handleSignIn={handleSignIn}
      />
    )
    : (
      <SignUp
        username={usernameSignUp}
        email={email}
        password={passwordSignUp}
        passwordVerify = {passwordVerifySignUp}
        changeField={changeFieldSignUp}
        handleSignUp={handleSignUp}
        message={message}
        handleDiplayMessage={handleDiplayMessage}
      />
    );

  // On retourne le composant à afficher suivant le path
  return (
    <div className="connexion">
      {componentToDisplayed}
    </div>
  );
};

Connexion.propTypes = {
  page: PropTypes.string.isRequired,

  usernameSignIn: PropTypes.string.isRequired,
  passwordSignIn: PropTypes.string.isRequired,
  changeFieldSignIn: PropTypes.func.isRequired,
  handleSignIn: PropTypes.func.isRequired,

  usernameSignUp: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  passwordSignUp: PropTypes.string.isRequired,
  passwordVerifySignUp: PropTypes.string.isRequired,
  changeFieldSignUp: PropTypes.func.isRequired,
  handleSignUp: PropTypes.func.isRequired,
  handleDiplayMessage: PropTypes.func.isRequired,

  message: PropTypes.string,
};
export default Connexion;

import React from 'react';
import PropTypes from 'prop-types';

import SignIn from './SignIn';
import SignUp from './SignUp';

const Connexion = ({
  // le path de la page courante
  page,
  // page connexion
  usernameSignIn,
  passwordSignIn,
  changeFieldSignIn,
  // page inscription
  usernameSignUp,
  passwordSignUp,
  lastname,
  firstname,
  email,
  changeFieldSignUp,
}) => {
  const componentToDisplayed = page === 'signIn'
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
  usernameSignUp: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  passwordSignUp: PropTypes.string.isRequired,
  changeFieldSignUp: PropTypes.func.isRequired,
};
export default Connexion;

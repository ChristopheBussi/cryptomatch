import React from 'react';
import PropTypes from 'prop-types';

import SignIn from './SignIn';
// import SignUp from './SignUp';

const Connexion = ({ page }) => (
  <div className="connexion">
    <p>{page}</p>
    <SignIn />
  </div>
);

Connexion.propTypes = {
  page: PropTypes.string.isRequired,
};
export default Connexion;

import { connect } from 'react-redux';

import Connexion from 'src/components/Connexion';

import {
  updateSingnInField,
  updateSingnUpField,
  signIn,
  signUp,
  displayErrorMessageAuth,
} from '../../actions/settings';

const mapStateToProps = (state) => ({
  // sommes nous connecté
  logged: state.user.logged,
  // composant de connexion
  usernameSignIn: state.auth.signIn.username,
  passwordSignIn: state.auth.signIn.password,
  // composant d'inscription
  usernameSignUp: state.auth.signUp.username,
  passwordSignUp: state.auth.signUp.password,
  passwordVerifySignUp: state.auth.signUp.passwordVerify,
  email: state.auth.signUp.email,
  message: state.auth.signUp.message,

});

const mapDispatchToProps = (dispatch) => ({
  // composant de connexion
  changeFieldSignIn: (newValue, fieldName) => {
    dispatch(updateSingnInField(newValue, fieldName));
  },

  handleSignIn: () => {
    dispatch(signIn());
  },

  // composant d'inscription
  changeFieldSignUp: (newValue, fieldName) => {
    dispatch(updateSingnUpField(newValue, fieldName));
  },

  handleSignUp: () => {
    dispatch(signUp());
  },
  handleDiplayMessage: (message,username,email) => {
    dispatch(displayErrorMessageAuth(message,username,email))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Connexion);

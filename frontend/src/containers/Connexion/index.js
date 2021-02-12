import { connect } from 'react-redux';

import Connexion from 'src/components/Connexion';

import { updateSingnInField, updateSingnUpField } from '../../actions/settings';

const mapStateToProps = (state) => ({
  // composant de connexion
  usernameSignIn: state.auth.signIn.username,
  passwordSignIn: state.auth.signIn.password,
  // composant d'inscription
  usernameSignUp: state.auth.signUp.username,
  passwordSignUp: state.auth.signUp.password,
  lastname: state.auth.signUp.lastname,
  firstname: state.auth.signUp.firstname,
  email: state.auth.signUp.email,

});

const mapDispatchToProps = (dispatch) => ({
  // composant de connexion
  changeFieldSignIn: (newValue, fieldName) => {
    dispatch(updateSingnInField(newValue, fieldName));
  },
  // composant d'inscription
  changeFieldSignUp: (newValue, fieldName) => {
    dispatch(updateSingnUpField(newValue, fieldName));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Connexion);

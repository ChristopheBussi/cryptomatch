import { connect } from 'react-redux';

import Connexion from 'src/components/Connexion';

import { updateSingnInField, updateSingnUpField } from '../../actions/settings';

const mapStateToProps = (state) => ({
  usernameSignIn: state.auth.signIn.username,
  passwordSignIn: state.auth.signIn.password,
  usernameSignUp: state.auth.signUp.username,
  passwordSignUp: state.auth.signUp.password,
  lastname: state.auth.signUp.lastname,
  firstname: state.auth.signUp.firstname,
  email: state.auth.signUp.email,

});

const mapDispatchToProps = (dispatch) => ({
  changeFieldSignIn: (newValue, fieldName) => {
    dispatch(updateSingnInField(newValue, fieldName));
  },
  changeFieldSignUp: (newValue, fieldName) => {
    dispatch(updateSingnUpField(newValue, fieldName));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Connexion);

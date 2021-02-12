import { connect } from 'react-redux';

import Connexion from 'src/components/Connexion';

import { updateLoginField } from '../../actions/settings';

const mapStateToProps = (state) => ({
  username: state.auth.signIn.username,
  password: state.auth.signIn.password,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, fieldName) => {
    dispatch(updateLoginField(newValue, fieldName));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Connexion);

import { connect } from 'react-redux';

import App from 'src/components/App';

import {
  getUserDataLocal,
} from 'src/actions/settings';

const mapStateToProps = (state) => ({
  // composant de connexion
  logged: state.user.logged,

});
const mapDispatchToProps = (dispatch) => ({
  // composant de connexion
  getUserDataLocal: () => {
    dispatch(getUserDataLocal());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

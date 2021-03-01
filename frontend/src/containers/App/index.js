import { connect } from 'react-redux';

import App from 'src/components/App';


const mapStateToProps = (state) => ({
  // composant de connexion
  logged: state.user.logged,
  theme: state.user.theme,
});

export default connect(mapStateToProps)(App);

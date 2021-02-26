import { connect } from 'react-redux';

import Header from 'src/components/Header';
import { logOut } from '../../actions/settings';

const mapStateToProps = (state) => ({
  logged: state.user.logged,
  USDAmount: state.user.USDAmount,
  username: state.user.username,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogOut: () => {
    localStorage.clear();
    dispatch(logOut());
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);

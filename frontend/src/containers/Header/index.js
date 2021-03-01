import { connect } from 'react-redux';

import Header from 'src/components/Header';
import { changeTheme, logOut } from '../../actions/settings';

const mapStateToProps = (state) => ({
  logged: state.user.logged,
  theme: state.user.theme,
  USDAmount: state.user.USDAmount,
  username: state.user.username,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogOut: () => {
    localStorage.clear();
    dispatch(logOut());
  },

  handleChangeTheme: (theme) => {
    dispatch(changeTheme(theme));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);

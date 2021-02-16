import { connect } from 'react-redux';

import Header from 'src/components/Header';

const mapStateToProps = (state) => ({
  logged: state.user.logged,
});

export default connect(mapStateToProps, null)(Header);

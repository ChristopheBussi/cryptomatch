import { connect } from 'react-redux';

import Dashboard from 'src/components/Dashboard';

import {
  fetchHisOrders,
  fecthHisCryptos,
  displayTab
} from 'src/actions/dashboard';

const mapStateToProps = (state) => ({
  hisCryptos: state.dashboard.hisCryptos,
  hisOrders: state.dashboard.hisOrders,
  loading: state.dashboard.loading,
  username: state.user.username,
  displayCryptos: state.dashboard.displayCryptos,
  displayOrders: state.dashboard.displayOrders,
});

const mapDispatchToProps = (dispatch) => ({
  manageLoad: (username) => {
    dispatch(fetchHisOrders(username));
    dispatch(fecthHisCryptos(username));
  },
  handleClickTab: (type) => {
    dispatch(displayTab(type));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

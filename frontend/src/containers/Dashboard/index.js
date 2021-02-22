import { connect } from 'react-redux';

import Dashboard from 'src/components/Dashboard';

import {
  fetchHisOrders,
  fecthHisCryptos
} from 'src/actions/dashboard';

const mapStateToProps = (state) => ({
  hisCryptos: state.dashboard.hisCryptos,
  hisOrders: state.dashboard.hisOrders,
  loading: state.dashboard.loading,
  username: state.user.username,
});

const mapDispatchToProps = (dispatch) => ({
  manageLoad: (username) => {
    dispatch(fetchHisOrders(username));
    dispatch(fecthHisCryptos(username));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

import { connect } from 'react-redux';

import Dashboard from 'src/components/Dashboard';

import {
  fetchHisOrders,
  fecthHisCryptos,
  displayTab,
  fecthHisPortfolio
} from 'src/actions/dashboard';

import {
  toOrder,
} from 'src/actions/crypto';

const mapStateToProps = (state) => ({
  hisCryptos: state.dashboard.hisCryptos,
  hisOrders: state.dashboard.hisOrders,
  hisPortfolio: state.dashboard.hisPortfolio,
  username: state.user.username,
  loadingHisCryptos: state.dashboard.loadingHisCryptos,
  loadingHisOrders: state.dashboard.loadingHisOrders,
  loadingHisPortfolio: state.dashboard.loadingHisPortfolio,
  displayCryptos: state.dashboard.displayCryptos,
  displayOrders: state.dashboard.displayOrders,
  displayPortfolio: state.dashboard.displayPortfolio,
});

const mapDispatchToProps = (dispatch) => ({
  manageLoad: (username) => {
    dispatch(fecthHisPortfolio(username));
    dispatch(fetchHisOrders(username));
    dispatch(fecthHisCryptos(username));
  },
  toOrder: (pairname,name, symbol, logo) => {
    dispatch(toOrder(pairname,name, symbol, logo));
  },
  handleClickTab: (type) => {
    dispatch(displayTab(type));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

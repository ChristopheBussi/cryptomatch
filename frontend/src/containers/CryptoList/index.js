import { connect } from 'react-redux';

import CryptoList from 'src/components/CryptosList';

import {
  toOrder,
  fetchCrypto,
} from 'src/actions/crypto';

const mapStateToProps = (state) => ({
  loading: state.crypto.loading,
  cryptos: state.crypto.cryptos,
  pairname: state.order.pairname,
});

const mapDispatchToProps = (dispatch) => ({
  // composant de connexion
  toOrder: (pairname) => {
    dispatch(toOrder(pairname));
  },
  manageLoad: () => {
    dispatch(fetchCrypto());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CryptoList);

import { connect } from 'react-redux';

import CryptoClass from 'src/components/CryptosList/CryptoClass';

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
  toOrder: (pairname,name) => {
    dispatch(toOrder(pairname,name));
  },
  manageLoad: () => {
    dispatch(fetchCrypto());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CryptoClass);

import { connect } from 'react-redux';

import CryptoList from 'src/components/CryptosList';

import {
  updatePairName,
  fetchCrypto,
} from 'src/actions/crypto';

const mapStateToProps = (state) => ({
  loading: state.crypto.loading,
  cryptos: state.crypto.cryptos,
  pairname: state.order.pairname,
});

const mapDispatchToProps = (dispatch) => ({
  // composant de connexion
  changeNameCrytpo: (pairname) => {
    dispatch(updatePairName(pairname));
  },
  manageLoad: () => {
    dispatch(fetchCrypto());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CryptoList);

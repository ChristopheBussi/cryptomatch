import { connect } from 'react-redux';

import CryptoClass from 'src/components/CryptosList/CryptoClass';

import {
  toOrder,
  fetchCrypto,
  changeSearch,
} from 'src/actions/crypto';

const mapStateToProps = (state) => ({
  loading: state.crypto.loading,
  cryptos: state.crypto.cryptos,
  pairname: state.order.pairname,
  search: state.crypto.search,
});

const mapDispatchToProps = (dispatch) => ({
  // composant de connexion
  toOrder: (pairname) => {
    dispatch(toOrder(pairname));
  },
  manageLoad: () => {
    dispatch(fetchCrypto());
  },
  manageChangeSearch: (newSearch) => {
    dispatch(changeSearch(newSearch));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CryptoClass);

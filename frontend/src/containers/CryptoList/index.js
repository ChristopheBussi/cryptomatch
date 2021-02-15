import { connect } from 'react-redux';

import CryptoList from 'src/components/CryptosList';

import {
  updatePairName,
} from 'src/actions/crypto';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  // composant de connexion
  changeNameCrytpo: (pairName) => {
    dispatch(updatePairName(pairName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CryptoList);

import React from 'react';
import PropTypes from 'prop-types';

import CryptoList from './CryptoList';

import './cryptos.scss';

const CryptosList = ({ cryptos }) => (
  <div className="cryptomonnaies">
    <div className="cryptomonnaies__header">
      <div>Logo et nom</div>
      <div>Dernier prix</div>
      <div>Variation 24h</div>
    </div>
    <div className="cryptomonnaies__list">
      {
        cryptos.map((crypto) => (
          <CryptoList key={crypto.symbol} {...crypto} />
        ))
      }
    </div>
  </div>
);

CryptosList.propTypes = {
  cryptos: PropTypes.arrayOf(
    PropTypes.shape({
      symbol: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default CryptosList;

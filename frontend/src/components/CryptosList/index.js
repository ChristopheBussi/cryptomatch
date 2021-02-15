import React from 'react';
import PropTypes from 'prop-types';

import CryptoList from './CryptoList';

import './cryptos.scss';

const CryptosList = ({ cryptos, changeNameCrytpo }) => (
  <div className="cryptos">
    <div className="cryptos__header">
      <div>Logo et nom</div>
      <div>Dernier prix</div>
      <div>Variation 24h</div>
    </div>
    <div className="cryptos__list">
      {
        cryptos.map((crypto) => (
          <CryptoList key={crypto.symbol} {...crypto} changeNameCrytpo={changeNameCrytpo} />
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
  changeNameCrytpo: PropTypes.func.isRequired,
};

export default CryptosList;

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const CryptoList = ({
  logo,
  symbol,
  name,
  pairName,
  lastPrice,
  priceChangePercent24h,
}) => (
  <NavLink to={`/ordre/${pairName}`}>
    <div className="cryptos__cryptoheader">
      <div className="cryptos__cryptoheader__id">
        <img className="logoCrypto" src={logo} alt={`logo_${name}`} />
        <span>{symbol}</span>
        <span>{name}</span>
      </div>
      <div>{lastPrice}</div>
      <div>{priceChangePercent24h}</div>
    </div>
  </NavLink>
);

CryptoList.propTypes = {
  logo: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pairName: PropTypes.string.isRequired,
  lastPrice: PropTypes.number.isRequired,
  priceChangePercent24h: PropTypes.number.isRequired,
};

export default CryptoList;
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const CryptoList = ({
  logo,
  symbol,
  name,
  lastPrice,
  priceChangePercent24h,
}) => (
  <NavLink to={`/ordre/${name}`} exact>
    <div className="crypto__header">
      <div className="">
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
  lastPrice: PropTypes.number.isRequired,
  priceChangePercent24h: PropTypes.number.isRequired,
};

export default CryptoList;

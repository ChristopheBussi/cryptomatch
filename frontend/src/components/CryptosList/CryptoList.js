import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './cryptos.scss';
const CryptoList = ({
  logo,
  symbol,
  name,
  pairName,
  lastPrice,
  changeNameCrytpo,
  priceChangePercent24h,
}) => {
  const handleClick = () => {
    changeNameCrytpo(pairName);
  };
  return (
    <div className="cryptos__crypto">
      <NavLink className='link' to={`/ordre/${pairName}`} onClick={handleClick}>
        <div className="cryptos__logo">
          <img className="cryptos__img" src={logo} alt={`logo_${name}`} />
          <div className="cryptos__name">{symbol}</div>
        </div>
        <div className={`quote${pairName} cryptos__price`}>{lastPrice}</div>
        <div className="cryptos__price24">{priceChangePercent24h}</div>
      </NavLink>
    </div>
  );
};

CryptoList.propTypes = {
  logo: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lastPrice: PropTypes.number.isRequired,
  priceChangePercent24h: PropTypes.number.isRequired,
  pairName: PropTypes.string.isRequired,
  changeNameCrytpo: PropTypes.func.isRequired,
};

export default CryptoList;

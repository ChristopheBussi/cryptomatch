import React from 'react';
import PropTypes from 'prop-types';
import './dashboard.scss';

import { NavLink } from 'react-router-dom';
const Crypto = ({
  toOrder,
  actualQuantity,
  pairName,
  name,
  buyingPrice,
  realTimePrice,
  logoUrl
}) => {
  const percent = ((realTimePrice/buyingPrice)*100)-100
  const percentAround = Math.round(percent*100)/100;
  const realTimeUSDTAmount = buyingPrice*actualQuantity;
  const realTimeUSDTAmountAround = Math.round(realTimeUSDTAmount*10000)/10000;
  let perncentClass = ''
  if (realTimePrice > buyingPrice ) {
    perncentClass = 'mostValue';
  }else{
    perncentClass = 'lessValue';
  }
  return (
    <NavLink className='link' to={`/ordre/${pairName}`} >
      <div className="hisCrypto">
        <div className="hisCrypto__logo">
          <img className="hisCrypto__img" src={logoUrl} alt={`logo_${pairName}`} />
          <div className="hisCrypto__name">{name}</div>
        </div>
        <div className="hisCrypto__quantity">{actualQuantity}</div>
        <div className="hisCrypto__buyingPrice">{buyingPrice}</div>
        <div className="hisCrypto__valuation">{realTimeUSDTAmountAround}</div>
        <div className={`hisCrypto__percent ${perncentClass}`}>{percentAround}%</div>
      </div>
    </NavLink>
  );
};

Crypto.propTypes = {
  actualQuantity: PropTypes.number.isRequired,
  pairName: PropTypes.string.isRequired,
  buyingPrice: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  logoUrl: PropTypes.string.isRequired,
  realTimePrice: PropTypes.number.isRequired,
};

export default Crypto;

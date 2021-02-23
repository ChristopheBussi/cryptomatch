import React from 'react';
import PropTypes from 'prop-types';
import './dashboard.scss';

import { NavLink } from 'react-router-dom';
const Crypto = ({
  actualQuantity, averagePrice, cryptoName, imageUrl
}) => {
  return (
    <NavLink className='link' to={`/ordre/${cryptoName}`} >
      <div className="hisCrypto">
        <div className="hisCrypto__logo">
          <img className="hisCrypto__img" src={imageUrl} alt={`logo_${cryptoName}`} />
          <div className="hisCrypto__name">{cryptoName}</div>
        </div>
        <div className="hisCrypto__quantity">{actualQuantity}</div>
        <div className="hisCrypto__averagePrice">{averagePrice}</div>

      </div>
    </NavLink>
  );
};

Crypto.propTypes = {
  actualQuantity: PropTypes.number.isRequired,
  averagePrice: PropTypes.number.isRequired,
  cryptoName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Crypto;

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const Crypto = ({
  actualQuantity,averagePrice,cryptoName,imageUrl
}) => {
  console.log(actualQuantity,averagePrice,cryptoName,imageUrl);
  return (
  <div>
   
    <p>actualQuantity{actualQuantity}</p>
    <p>averagePrice{averagePrice}</p>
    <p>cryptoName{cryptoName}</p>
    <p>imageUrl{imageUrl}</p>
  </div>
  );
};

Crypto.propTypes = {
  actualQuantity: PropTypes.number.isRequired,
  averagePrice: PropTypes.number.isRequired,
  cryptoName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Crypto;

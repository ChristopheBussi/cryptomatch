import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import Graphic from './Graphic';
import Field from './Field';
// == Import Scss
import './order.scss';

const Order = ({
  quantity,
  handlePlaceTheOrder,
  changeField,
  pairname,
  USDAmount,
  actualQuantityPair,
  message,
}) => {
  const [ordertype, setActionType] = useState('');
  const { slug } = useParams();
  const quotation = 1;

  const handleSubmit = (event) => {
    event.preventDefault();
    handlePlaceTheOrder(ordertype, quantity, quotation);
  };
  const displaymMessage = message != null ? 'order__messageDisplay' : 'order__messageNone';
  return (
    <div className="order">
      <h2 className="order__title">{slug}</h2>
      <Graphic pairName={slug} />
      <div className={displaymMessage}>{message}</div>
      <div className="order__usdAmout">Montant USDT disponible : {USDAmount} </div>
      <div className="order__cryptoAmount">Quantité de {pairname}  detenus : {actualQuantityPair} </div>
      <form onSubmit={handleSubmit}>
        <Field
          name="quantity"
          type="number"
          placeholder="Quantité"
          value={quantity}
          onChange={changeField}
        />
        <button type="submit" onClick={() => setActionType('Buy')}>
          Acheter
        </button>
        <button type="submit" onClick={() => setActionType('Sell')}>
          Vendre
        </button>
      </form>
    </div>
  );
};

Order.propTypes = {
  handlePlaceTheOrder: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
  USDAmount: PropTypes.number.isRequired,
  changeField: PropTypes.func.isRequired,
  pairname: PropTypes.string.isRequired,
  actualQuantityPair: PropTypes.number.isRequired,
  message: PropTypes.string,
};
export default Order;

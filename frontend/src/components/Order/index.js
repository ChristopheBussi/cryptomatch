import React, { useState } from 'react';
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
}) => {
  const [ordertype, setActionType] = useState('');
  const { slug } = useParams();
  console.log(slug);
  const quotation = 1.22;

  const handleSubmit = (event) => {
    event.preventDefault();
    handlePlaceTheOrder(ordertype, quantity, quotation);
  };
  return (
    <div className="order">
      <Graphic pairName={pairname} />
      <h2>Order</h2>
      <div>`Quantité usd disponible : {USDAmount} </div>
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
};
export default Order;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import Field from './Field';
// == Import Scss
import './order.scss';

const Order = ({ quantity, handlePlaceTheOrder, changeField }) => {
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
      <h2>Order</h2>
      <form onSubmit={handleSubmit}>
        <Field
          name="quantity"
          type="number"
          placeholder="Quantité"
          value={quantity}
          onChange={changeField}
        />
        <button type="submit" onClick={() => setActionType('buy')}>
          Achetter
        </button>
        <button type="submit" onClick={() => setActionType('sell')}>
          Vendre
        </button>
      </form>
    </div>
  );
};

Order.propTypes = {
  handlePlaceTheOrder: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
  changeField: PropTypes.func.isRequired,
};
export default Order;

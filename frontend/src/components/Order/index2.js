import React, { useState, useEffect, Component } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import Graphic from './Graphic';
import Field from './Field';
// == Import Scss
import './order.scss';

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = { typeAction: '' };
  }
  render() {
    const {
      quantity,
      handlePlaceTheOrder,
      changeField,
      pairname,
      USDAmount,
      actualQuantityPair,
      message,
      typeAction,
    } = this.props;
    const displaymMessage = message != null ? 'order__messageDisplay' : 'order__messageNone';
    const quotation = 1;
    const handleSubmit = (event) => {
      event.preventDefault();
      handlePlaceTheOrder(typeAction, quantity, quotation);
    };
    return (
      <div className="order">
        <h2 className="order__title">{pairname}</h2>
        <Graphic pairName={pairname} />
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
          <button type="submit" onClick={() => this.state.typeAction = 'Buy'}>
            Acheter
        </button>
          <button type="submit" onClick={() => this.state.typeAction = 'Sell'}>
            Vendre
        </button>
        </form>
      </div>
    );
  }
};

export default Order;

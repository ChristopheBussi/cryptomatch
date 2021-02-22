import React, { useState, useEffect, Component } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import Graphic from './Graphic';
import Field from './Field';
// == Import Scss
import './order.scss';
let socket;

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = { typeAction: '', quotation: null, converter: null };
  }
  componentDidMount() {
    const pair = '/' + this.props.pairname.toLowerCase() + '@aggTrade';
    socket = new WebSocket(`wss://stream.binance.com:9443/ws${pair}`);
    socket.onmessage = (event) => {
      const objectData = JSON.parse(event.data);
      const DOMquote = document.querySelector('.order__quotation');
      let quote = objectData.p;
      DOMquote.textContent = quote;
      this.state.quotation = quote;
    };
  }
  componentWillUnmount() {
    socket.close();
  }
  render() {
    const {
      quantity,
      USDAmount,
      pairname,
      actualQuantityPair,
      message,
      handlePlaceTheOrder,
      handleDiplayMessage,
      changeField,
    } = this.props;
    const handleSubmit = (event) => {
      event.preventDefault();
      if (this.state.typeAction === 'Buy') {
        if (USDAmount < quantity * this.state.quotation) {
          handleDiplayMessage('Tu n\'a pas assez de Usd')
        }
        else {
          handlePlaceTheOrder(this.state.typeAction, this.state.quotation);
        }
      }
      if (this.state.typeAction === 'Sell') {
        if (actualQuantityPair < quantity) {
          handleDiplayMessage('Tu n\'a pas assez de crypto')
        }
        else {
          handlePlaceTheOrder(this.state.typeAction, this.state.quotation);
        }
      }
    };
    const Amount = Math.round(USDAmount * 100) / 100;
    const displaymMessage = message != null ? 'order__messageDisplay' : 'order__messageNone';
    this.state.converter = Math.round((quantity*this.state.quotation)*100/100);
    return (
      <div className="order">
        <h2 className="order__title">{pairname}</h2>
        <span className="order__quotation"></span>
        <div className="order__graph">
          <Graphic pairName={pairname} />
          <div className="order__passed">
            <h2 className="order__orderTitle">Passer un ordre</h2>
            <div className={displaymMessage}>{message}</div>
            <div className="order__usdAmout">Montant USDT disponible : {Amount.toLocaleString()} </div>
            <div className="order__cryptoAmount">Quantité de {pairname}  detenus : {actualQuantityPair} </div>
            <div className="order__convertion">{this.state.converter} </div>
            <form onSubmit={handleSubmit}>
              <Field
                name="quantity"
                type="number"
                placeholder="Quantité"
                value={quantity}
                onChange={changeField}
              />
              <div className="order__button">
                <button type="submit" onClick={() => this.state.typeAction = 'Buy'}>
                  Acheter
                </button>
                
                <button type="submit" onClick={() => this.state.typeAction = 'Sell'}>
                  Vendre
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    );
  }
};

export default Order;

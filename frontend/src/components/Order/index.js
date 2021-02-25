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
      const DOMquote = document.querySelector('.order__price-quotation');
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
      name,
      actualQuantityPair,
      message,
      handlePlaceTheOrder,
      handleDiplayMessage,
      changeField,
      symbol,
      logo,
    } = this.props;
    const handleSubmit = (event) => {
      event.preventDefault();
      if (quantity < 1) {
        handleDiplayMessage('Saisie un nombre')
      } else {
        if (this.state.typeAction === 'Buy') {
        if (USDAmount < quantity * this.state.quotation) {
          handleDiplayMessage('Tu n\'as pas les fonds necessaires')
        }
        else if (document.querySelector('.order__price-quotation').textContent == 'Cotation en chargement') {
          handleDiplayMessage('Patienter pendant le chargement de la valorisation')
        } else {
          handlePlaceTheOrder(this.state.typeAction, this.state.quotation);

        }
      }
      if (this.state.typeAction === 'Sell') {
        if (actualQuantityPair < quantity) {
          handleDiplayMessage(`Tu n\'as pas assez de ${name}`)
        }else if (document.querySelector('.order__price-quotation').textContent == 'Cotation en chargement') {
          handleDiplayMessage('Patienter pendant le chargement de la valorisation')
        }else {
          handlePlaceTheOrder(this.state.typeAction, this.state.quotation);
        }
      }
      }
      
    };
    const Amount = Math.round(USDAmount * 100) / 100;
    let displaymMessage = message != null ? 'order__messageDisplay' : 'order__messageNone';
    if (message === 'Ordre Enregistré') {
      displaymMessage = 'order__messageDisplay-green'
    }
    this.state.converter = Math.round((quantity * this.state.quotation) * 100 / 100);
    if (isNaN(this.state.converter)) {
      this.state.converter = 0;
    }
    return (
      <div className="order">
        <h2 className="order__orderTitle">Passer un ordre</h2>
        <div className="order__graph">
          <Graphic pairName={pairname} />
          <div className="order__passed">
            <div className="order__pair">
              <img className="order__pair-logo" src={logo} alt={pairname}></img>
              <div className="order__pair-pairname">{pairname}</div>
              <div className="order__pair-subtitle">{name}</div>
            </div>
            <div className="order__price">
              <div className="order__price-name">1 {symbol} = </div>
              <div className="order__price-quotation">Cotation en chargement</div>
              <div className="order__price-value">USDT</div>
            </div>

            <div className={displaymMessage}>{message}</div>
            <div className="order__usdAmout">Fonds disponibles : {Amount.toLocaleString()} USDT </div>
            <div className="order__cryptoAmount">Quantité de {symbol}  detenus : {actualQuantityPair} </div>
            <form onSubmit={handleSubmit}>
              <Field
                name="quantity"
                type="number"
                placeholder={`${symbol} voulu :`}
                value={quantity}
                onChange={changeField}
              />
              <div className="order__convertion">Montant USDT = {this.state.converter} </div>
              <div className="buttonPassedOrder">
                <button className="buttonPassedOrder__Buy button" type="submit" onClick={() => this.state.typeAction = 'Buy'}>
                  Acheter
              </button>
                <button className="buttonPassedOrder__Sell button" type="submit" onClick={() => this.state.typeAction = 'Sell'}>
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

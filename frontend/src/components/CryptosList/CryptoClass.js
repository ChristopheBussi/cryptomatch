import React  ,{ Component } from 'react';

import store from 'src/store';
import CryptoList from './CryptoList';


class CryptoClass extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { manageLoad } = this.props;
    manageLoad();

    
  }
   componentDidUpdate() {
    const socket = new WebSocket("wss://stream.binance.com:9443/ws/1INCHUSDT@aggTrade");
    socket.onmessage = (event) => {
      const objectData = JSON.parse(event.data);
      const DOMquote = document.querySelector('.quote' + objectData.s);
      console.log(objectData.s);
      let quote = objectData.p;
      DOMquote.textContent = quote;
    };
  }

  render() {
    const { loading, cryptos, toOrder } = this.props;
    return (
      <div className="cryptos">
        {loading && <div>Liste des cryptos en cours de chargement</div>}
        {!loading && (
          <>
            <div className="cryptos__header">
              <div className="cryptos__logo">Nom</div>
              <div className="cryptos__price">Dernier prix USDT</div>
              <div className="cryptos__price24">Variation 24h</div>
            </div>
            <div className="cryptos__list">
              {
                cryptos.map((crypto) => (
                  <CryptoList
                    key={crypto.symbol}
                    {...crypto}
                    toOrder={toOrder}
                    cryptos={cryptos}
                  />
                ))
              }
            </div>
          </>
        )}

      </div>
    );
  }
}
export default CryptoClass;

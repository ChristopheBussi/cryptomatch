import React, { Component } from 'react';

import CryptoList from './CryptoList';

let socket;

class CryptoClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    }

  }

  setSearch(newSearchValue){
    this.setState({
      search: newSearchValue,
    })
  }

  componentDidMount() {
    const { manageLoad } = this.props;
    manageLoad();
  }

  componentDidUpdate() {
    const { cryptos } = this.props;
    let streams = '';
    cryptos.forEach((crypto) => {
      streams += '/' + crypto.pairName.toLowerCase() + '@aggTrade';
    });
    socket = new WebSocket(`wss://stream.binance.com:9443/ws${streams}`);
    socket.onmessage = (event) => {
      const objectData = JSON.parse(event.data);
      const DOMquote = document.querySelector('.quote' + objectData.s);
      let quote = objectData.p;
      DOMquote.textContent = quote;
    };
  }
  componentWillUnmount() {
    socket.close();
  }

  getFilteredCrypto() {
    const { search } = this.state;
  }

  render() {
    const { loading, cryptos, toOrder } = this.props;
    const { search } = this.state;
    return (
      <div className="cryptos">
        {loading && <div>Liste des cryptos en cours de chargement</div>}
        {!loading && (
          <>
            <div className="cryptos__searchBar">
              <input onChange={(event) => {
                this.setSearch(event.target.value)
              }} value={search} type="text" placeholder="Rechercher"></input>
            </div>

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

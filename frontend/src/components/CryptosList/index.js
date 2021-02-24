import React, { Component } from 'react';

import Crypto from './Crypto';

let socket;

class Cryptos extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { manageLoad } = this.props;
    manageLoad();
  }
  
  componentDidUpdate() {
    const cryptosList = this.getFilteredCrypto();
    let streams = '';
    cryptosList.forEach((crypto) => {
      streams += '/' + crypto.pairName.toLowerCase() + '@aggTrade';
    });
    socket = new WebSocket(`wss://stream.binance.com:9443/ws${streams}`);
    socket.onmessage = (event) => {
      const objectData = JSON.parse(event.data);
      const DOMquote = document.querySelector('.quote' + objectData.s);
      if (DOMquote != null) {
        let quote = objectData.p;
        DOMquote.textContent = quote;
      }
      
    };
  }
  componentWillUnmount() {
    socket.close();
  }
  
  getFilteredCrypto() {
    // plan d'attaque :
    // - récupérer la propriété search du state
    const { search, cryptos } = this.props;

    // on passe notre chaine de caractère search en minuscule
    const loweredSearch = search.toLowerCase();

    // - filtrer notre tableau de devises grâce à cette information
    const filteredCryptoList = cryptos.filter((crypto) => {
      // on passe le nom de la devise que l'on étudie en minuscule
      const loweredCryptoName = crypto.name.toLowerCase();
      // on teste si la devise étudiée (en minuscule) contient
      // notre chaine de recherche (en mlinuscule elle aussi).
      // Et on renvoit le résultat...
      return loweredCryptoName.includes(loweredSearch);
    });

    // - retourner le tableau filtré
    return filteredCryptoList;
  }
  
  render() {
    const { loading, cryptos, toOrder, manageChangeSearch, search } = this.props;
    const cryptosList = this.getFilteredCrypto();
    return (
      <div className="cryptos">
        {loading && <div>Liste des cryptos en cours de chargement</div>}
        {!loading && (
          <>
            <div className="cryptos__searchBar">
              <input 
              className="cryptos_search"
              onChange={(event) => manageChangeSearch(event.target.value)} 
              value={search} 
              type="text" 
              placeholder="Rechercher"
              />
            </div>

            <div className="cryptos__header">
              <div className="cryptos__logo">Nom</div>
              <div className="cryptos__price">Dernier prix USDT</div>
              <div className="cryptos__price24">Variation 24h</div>
            </div>
            <div className="cryptos__list">
              {
                cryptosList.map((crypto) => (
                  <Crypto
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
export default Cryptos;

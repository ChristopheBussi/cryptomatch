// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import des composants
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Connexion from 'src/containers/Connexion';
import Order from 'src/containers/Order';
import CryptosList from 'src/containers/CryptoList';

// == Import
import './app.scss';

// import des data en locale
import cryptosData from 'src/data/listCryptos';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/connexion" exact>
        <Connexion page="signIn" />
      </Route>
      <Route path="/inscription" exact>
        <Connexion page="signUp" />
      </Route>
      <Route path="/ordre/:slug">
        <Order />
      </Route>
      <Route path="/cryptomonnaies" exact>
        <CryptosList cryptos={cryptosData} page="cryptomonnaies" />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;

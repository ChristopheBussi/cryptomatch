// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import des composants
import Header from 'src/containers/Header';
import Home from 'src/components/Home';
import Connexion from 'src/containers/Connexion';
import Order from 'src/containers/Order';
import CryptosList from 'src/containers/CryptoList';
import About from 'src/components/About';
import Dashboard from 'src/components/Dashboard';
import Ranking from 'src/containers/Ranking';

// == Import
import './app.scss';
import NotFound from '../NotFound';

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
        <CryptosList />
      </Route>
      <Route path="/dashboard" exact>
        <Dashboard />
      </Route>
      <Route path="/classement" exact>
        <Ranking />
      </Route>
      <Route path="/qui-sommes-nous" exact>
        <About />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;

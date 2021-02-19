// == Import npm
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import des composants
import Header from 'src/containers/Header';
import Home from 'src/components/Home';
import Connexion from 'src/containers/Connexion';
import Order from 'src/containers/Order';
import CryptosList from 'src/containers/CryptoList';
import About from 'src/components/About';
import Dashboard from 'src/components/Dashboard';
import Ranking from 'src/containers/Ranking';
import CryptoClass from 'src/containers/CryptoList';


// == Import
import './app.scss';
import NotFound from '../NotFound';

// == Composant
const App = ({ logged }) => (
  <div className="app">
    <Header />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/connexion" exact>
        {
          !logged
            ? <Connexion page="signIn" />
            : <Redirect to="/cryptomonnaies" />
        }
      </Route>
      <Route path="/inscription" exact>
        {
          !logged
            ? <Connexion page="signUp" />
            : <Redirect to="/" />
        }
        <Connexion page="signUp" />
      </Route>
      <Route path="/ordre/:slug">
        {
          logged
            ? <Order />
            : <Redirect to="/connexion" />
        }
      </Route>
      <Route path="/cryptomonnaies" exact>
        <CryptoClass />
      </Route>
      <Route path="/dashboard" exact>
        {
          logged
            ? <Dashboard />
            : <Redirect to="/connexion" />
        }
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

App.propTypes = {
  logged: PropTypes.bool.isRequired,
};
// == Export
export default App;

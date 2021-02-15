// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import des composants
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Connexion from 'src/containers/Connexion';

// == Import
import './app.scss';

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
    </Switch>
  </div>
);

// == Export
export default App;

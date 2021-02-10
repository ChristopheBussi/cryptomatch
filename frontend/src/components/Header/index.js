import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// == Import Scss
import './header.scss';

const Header = () => (
  <header className="header">
    <div className="header__title">
      <h1>Crypto Match</h1>
      <button className="buttonDesktop" type="button">Connexion</button>
      <button className="buttonDesktop" type="button">Inscription</button>
      <FontAwesomeIcon size="2x" icon={faBars} />
    </div>
    <nav>
      <ul>
        <li>Accueil</li>
        <li>Cryptomonnaies</li>
        <li>Classement</li>
        <li>Qui-sommes-nous</li>
      </ul>
      <button className="buttonMobile" type="button">Connexion</button>
      <button className="buttonMobile" type="button">Inscription</button>
    </nav>
  </header>
);

export default Header;

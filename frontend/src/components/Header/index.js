import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// == Import Scss
import './header.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const classNav = isOpen ? 'header__nav-open' : 'header__nav-close';
  return (

    <header className="header">
      <div className="header__title">
        <h1>Crypto Match</h1>
        <button className="buttonDesktop" type="button">Connexion</button>
        <button className="buttonDesktop" type="button">Inscription</button>
        <button
          className="buttonMenuBurger"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon
            className="iconBurger"
            size="2x"
            icon={faBars}
          />
        </button>
      </div>
      <nav className={classNav}>
        <ul>
          <li>Accueil</li>
          <li>Cryptomonnaies</li>
          <li>Classement</li>
          <li>Qui-sommes-nous</li>
        </ul>
        <div className="buttonLogin">
          <button className="buttonMobile login" type="button">Connexion</button>
          <button className="buttonMobile signin" type="button">Inscription</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

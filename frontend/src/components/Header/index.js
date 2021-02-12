import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

// == Import Scss
import './header.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const classNav = isOpen ? 'header__nav-open nav' : 'header__nav-close nav';
  return (

    <header className="header">
      <div className="header__title">
        <h1>Crypto Match</h1>
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
          <button className="buttonAuth login" type="button">
            <NavLink
              to="/connexion"
              exact
            >
              Connexion
            </NavLink>
          </button>
          <button className="buttonAuth signin" type="button">
            <NavLink
              to="/inscription"
              exact
            >
              Connexion
            </NavLink>
          </button>
        </div>
      </nav>

    </header>
  );
};

export default Header;

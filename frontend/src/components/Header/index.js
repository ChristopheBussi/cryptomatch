import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

// == Import Scss
import './header.scss';

const Header = ({ logged }) => {
  const [isOpen, setIsOpen] = useState(false);
  const classNav = isOpen ? 'header__nav-open nav' : 'header__nav-close nav';
  return (

    <header className="header">
      <div className="header__container">
        <div className="header__container__title">
          <h1>
            <NavLink to="/" exact>
              Crypto Match
            </NavLink>
          </h1>
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
          <nav className={classNav}>
            <ul>
              <li>
                <NavLink to="/" exact onClick={() => setIsOpen(false)}>
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink to="/cryptomonnaies" exact onClick={() => setIsOpen(false)}>
                  Cryptomonnaies
                </NavLink>
              </li>
              {
                logged
                  ? (
                    <li>
                      <NavLink to="/dashboard" exact onClick={() => setIsOpen(false)}>
                        Dashboard
                      </NavLink>
                    </li>
                  )
                  : null
              }
              <li>
                <NavLink to="/classement" exact onClick={() => setIsOpen(false)}>
                  Classement
                </NavLink>
              </li>
              <li>
                <NavLink to="/qui-sommes-nous" exact onClick={() => setIsOpen(false)}>
                  Qui-Sommes-Nous
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="buttonLogin">
        <button className="buttonAuth login" type="button" onClick={() => setIsOpen(false)}>
          <NavLink to="/connexion" exact>
            Connexion
          </NavLink>
        </button>
        <button className="buttonAuth signin" type="button" onClick={() => setIsOpen(false)}>
          <NavLink to="/inscription" exact>
            Inscription
          </NavLink>
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  logged: PropTypes.bool.isRequired,
};

export default Header;

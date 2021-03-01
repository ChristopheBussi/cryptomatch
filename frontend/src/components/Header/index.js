import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

// == Import Scss
import './header.scss';

const Header = ({ logged, handleLogOut, USDAmount, username, theme, handleChangeTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const classNav = isOpen ? 'header__nav-open nav' : 'header__nav-close nav';
  const aroundSold = Math.round(USDAmount);

  return (
    
    <header className="header">
      <div className="header__container">
        <div className="header__container__title">
          <h1>
            <NavLink to="/" exact>
              Crypto Match
            </NavLink>
          </h1>

          <button className="buttonThemeSwitcher" type="button" onClick={() => handleChangeTheme(!theme)}>change theme</button>

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
                <NavLink
                  to="/"
                  exact
                  onClick={() => setIsOpen(false)}
                  activeClassName="header__selected"
                >
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/cryptomonnaies"
                  exact
                  onClick={() => setIsOpen(false)}
                  activeClassName="header__selected"
                >
                  Cryptomonnaies
                </NavLink>
              </li>
              {
                logged
                  ? (
                    <li>
                      <NavLink
                        to="/dashboard"
                        exact
                        onClick={() => setIsOpen(false)}
                        activeClassName="header__selected"
                      >
                        Dashboard
                      </NavLink>
                    </li>
                  )
                  : null
              }
              <li>
                <NavLink
                  to="/classement"
                  exact
                  onClick={() => setIsOpen(false)}
                  activeClassName="header__selected"
                >
                  Classement
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/qui-sommes-nous"
                  exact
                  onClick={() => setIsOpen(false)}
                  activeClassName="header__selected"
                >
                  Qui-Sommes-Nous
                </NavLink>
              </li>
            </ul>
            <div className="buttonLogin">
              {
                logged
                  ? (
                    <>
                      <div className="buttonLogin__solde">{username} : {aroundSold} USDT</div>
                      <button className="buttonAuth logout" type="button" onClick={handleLogOut}>Déconnexion</button>
                    </>
                  ) :
                  <>
                    <NavLink to="/connexion" exact>
                      <button className="buttonAuth login" type="button" onClick={() => setIsOpen(false)}>
                        Connexion
                        </button>
                    </NavLink>
                    <NavLink to="/inscription" exact>
                      <button className="buttonAuth signin" type="button" onClick={() => setIsOpen(false)}>
                        Inscription
                    </button>
                    </NavLink>
                  </>
              }
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  logged: PropTypes.bool.isRequired,
  handleLogOut: PropTypes.func.isRequired,
  handleChangeTheme: PropTypes.func.isRequired,
  theme: PropTypes.bool.isRequired,
  USDAmount: PropTypes.number,
};

export default Header;

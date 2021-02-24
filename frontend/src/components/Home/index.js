/* eslint-disable max-len */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

// == Import Scss
import './home.scss';
import './AnimationHome.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const classDivRules = 'home__rules__visible';
  const classDot = isVisible ? 'dot-hidden' : 'dot-visible';
  const classChevron = isVisible ? 'iconCheveronTop' : 'iconCheveronDown';
  const classHomeAlign = isVisible ? 'homeAlign' : 'homeNotAlign';
  return (

    <div className={`home ${classHomeAlign}`}>
      <h2>Bienvenue sur Crypto Match</h2>
      <div className="home__rules">

        <div className="home__rules__p">
              <p>
                Le site organise un concours de trading sur les cryptomonnaies sans argent réel du 15 février au 15 mars<span className={classDot}>...</span>
              </p>
          <div className={classDivRules}>
              <p>
                Chaque participant obtiendra un capital de départ de 10 000 dollars fictifs qu’il pourra
                investir sur les cryptomonnaies de son choix. Vous avez la possibilité d'accéder à une page de classement ou vous pourrez voir qui aura engendré la plus grande plus-value. Ce classementest est mis à jour toute les 24 heures. Pour être classé il vous faudra avoir passé un premier ordre. Pour vous inscrire au concours vous devez impéraivement vous inscrire avant le 15 février. Il est impossible de rejoindre une session déjà commencé.
              </p>
              <p>
                Le gagnant est celui qui aura engendré la plus grande plus-value au bout d'un mois.
              </p>
          </div>

        </div>

        <button
          className="handleRules"
          type="button"
          onClick={ function()
          {
            console.log(!isVisible);

            setIsVisible(!isVisible)

            let DivRules = document.querySelector(".home__rules");
            let HomeRules = document.querySelector(".home__rules__visible");

            if(!isVisible )
            {
              DivRules.style.maxHeight = '500px';
              DivRules.style.transition = "max-height 0.5s ease-in-out";
              HomeRules.style.visibility = 'visible';
              HomeRules.style.position = 'relative';
              HomeRules.style.left = '0';
            }
            else
            {
              DivRules.style.maxHeight = '80px';
              DivRules.style.transition = "max-height 0.1s ease-in-out";
              HomeRules.style.maxHeight = '0px';
              HomeRules.style.visibility = 'hidden';
            }


          }}
        >
          <FontAwesomeIcon
            className={classChevron}
            size="2x"
            icon={faChevronCircleDown}
          />
        </button>
      </div>



    </div>
  );
};

export default Home;

import React from 'react';

// == Import Scss
import './home.scss';

const Home = () => (
  <div className="home">
    <h2>Bienvenue sur Crypto Match</h2>
    <p>
      Le site organise un concours de trading sur les cryptomonnaies sans argent réel.
    </p>
    <p>
      Chaque participant obtiendra un capital de départ de 10 000 dollars fictifs qu’il pourra
      investir sur les cryptomonnaies de son choix.
    </p>
    <p>
      Le gagnant est celui qui aura engendré la plus grande plus-value au bout d'un mois.
    </p>
  </div>
);

export default Home;

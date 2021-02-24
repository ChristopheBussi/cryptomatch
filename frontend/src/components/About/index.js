import React, {Fragment} from 'react';

import './About.css';
import Card from "./Card";
import GithubIcon from '../../assets/Images/GitHubLight.png';

const Team = {
  membre1 : {
    name : 'Jocelyon',
    fonction : 'Git master',
    link : 'https://portfolio.fr',
    specialisation : "React"
  },
  membre2: {
    name : 'Julien',
    fonction : 'Lead dev front',
    link : 'https://portfolio.fr',
    specialisation : "React"
  },
  membre3: {
    name : 'Christophe',
    fonction : 'Product Owner et Scrum master',
    link : 'https://portfolio.fr',
    specialisation : "Symfony"
  },
  membre4: {
    name : 'Walid',
    fonction : 'Lead dev back',
    link : 'https://portfolio.fr',
    specialisation : "Symfony"
  }
};

const LinkGitHub = "https://github.com/O-clock-McFly/projet-concours-trading";

const About = () => (

  <div className="About">

    <h1 className="Title">Présentation de l'équipe</h1>

    <div className="Presentation">
        <p>
          Après une formation intense de 700H où nous avons appris le métier de développeur web, nous avons réalisé,
          dans le cadre du projet de fin de formation "l'Apothéose" ce site afin de mettre en pratique tout ce que nous avons appris.
        </p>
    </div>

    <div className="CardList">
      {
            Object.entries(Team).map(([key, value]) => {
              return <Card Key={value.name} Name={value.name} Fonction={value.fonction} Link={value.link} />
              })
      }
    </div>

    <div className="LinkProject">
      <img className="GithubIcon" src={GithubIcon} />
      <a className="LinkGitHub" href={LinkGitHub}>Lien github du projet</a>
    </div>

  </div>

);

export default About;

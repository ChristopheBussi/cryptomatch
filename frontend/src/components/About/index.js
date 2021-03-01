import React, {Fragment} from 'react';

import './About.css';
import './theme.scss';
import Card from "./Card";
import { FaGithub } from 'react-icons/fa';

const Team = [
  {
    name : 'Jocelyn',
    fonction : 'Git master',
    link : 'https://portfolio.fr',
    specialisation : "React"
  },
  {
    name : 'Julien',
    fonction : 'Lead dev front',
    link : 'https://portfolio.fr',
    specialisation : "React"
  },
  {
    name : 'Christophe',
    fonction : 'Product Owner et Scrum master',
    link : 'https://portfolio.fr',
    specialisation : "Symfony"
  },
  {
    name : 'Walid',
    fonction : 'Lead dev back',
    link : 'https://portfolio.fr',
    specialisation : "Symfony"
  }
];

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
            Team.map((admin) => (
              <Card
              key={admin.name}
              name={admin.name}
              fonction={admin.fonction}
              link={admin.link} 
              />
            ))   
      }
    </div>

    <div className="LinkProject">
      <FaGithub size="x2" className="GithubIcon" />
      <a className="LinkGitHub" href={LinkGitHub}>Lien github du projet</a>
    </div>

  </div>

);

export default About;

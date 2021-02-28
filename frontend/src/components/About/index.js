import React, {Fragment} from 'react';

import './About.css';
import Card from "./Card";
import GithubIcon from '../../assets/Images/GitHubLight.png';

const Team = [
  {
    name : 'Jocelyn',
    fonction : 'Git master',
    link : 'https://portfolio.fr',
    speciality : "React",
    image : 'WalidAvatar.png'
  },
  {
    name : 'Julien',
    fonction : 'Lead dev front',
    link : 'https://portfolio.fr',
    speciality : "React",
    image : 'WalidAvatar.png'
  },
  {
    name : 'Christophe',
    fonction : 'Product Owner et Scrum master',
    link : 'https://portfolio.fr',
    speciality : "Symfony",
    image : 'WalidAvatar.png'
  },
  {
    name : 'Walid',
    fonction : 'Lead dev back',
    link : 'https://portfolio.fr',
    speciality: "Symfony",
    image : 'WalidAvatar.png'
  }
];

const LinkGitHub = "https://github.com/O-clock-McFly/projet-concours-trading";

const About = () => (

  <div className="About">

    <h1 className="Title">Présentation de l'équipe</h1>

    <div className="Presentation">

          Après une formation intense de 700H où nous avons appris le métier de développeur web, nous avons réalisé,
          dans le cadre du projet de fin de formation "l'Apothéose" ce site afin de mettre en pratique tout ce que nous avons appris.
    </div>

    <div className="CardList">
      {
            Team.map((admin) => (

              <Card
              key={admin.name}
              name={admin.name}
              fonction={admin.fonction}
              link={admin.link}
              image = {admin.image}
              speciality = {admin.speciality}
              />

            ))
      }
    </div>
    <div className="LinkProject">
      <img className="GithubIcon" src={GithubIcon} />
      <a className="LinkGitHub" href={LinkGitHub}>Lien github du projet</a>
    </div>


  </div>


);

export default About;

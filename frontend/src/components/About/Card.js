import React from "react";
import ImageDefault from '../../assets/Images/imagedefault.png';
import ReactIcon from '../../assets/Images/react.png';
import SymfoIcon from '../../assets/Images/symfony-282493.png';


import "./Card.css";

const Card = ({name, fonction, link, image, speciality}) => {

  let Img = ImageDefault;
  let IconSpeciality = null;
  let BackgroundClassName = null;

  if(name === 'Walid')
    BackgroundClassName  = "Walid";
  if(name === 'Julien')
    BackgroundClassName  = "Julien";
  if(name === 'Christophe')
    BackgroundClassName  = "Christophe";
  if(name === 'Jocelyn')
    BackgroundClassName  = "Joss";

  if(speciality === 'React')
    IconSpeciality = ReactIcon;
  if(speciality === 'Symfony')
    IconSpeciality = SymfoIcon;


  return (
    <div className="Card">
      <div className={BackgroundClassName}></div>
      <div className="CardInfos">
          <div className="Name">{name}</div>
          <div className="Fonction">{fonction}</div>
          <div><img className="Speciality" src={IconSpeciality} /></div>
          <div className="Link"><a href={link}>{link}</a></div>
      </div>
    </div>
  )
}

export default Card;

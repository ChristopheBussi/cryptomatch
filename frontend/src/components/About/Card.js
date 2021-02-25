import React from "react";
import ImageDefault from '../../assets/Images/imagedefault.png';

import "./Card.css";

const Card = ({name, fonction, link}) => {

  return (
    <div className="Card">

      <img className="Image" src={ImageDefault}/>
      <div className="Name">{name}</div>
      <div className="Fonction">{fonction}</div>
      <div className="Link"><a href={link}>{link}</a></div>

    </div>
  )
}


export default Card;

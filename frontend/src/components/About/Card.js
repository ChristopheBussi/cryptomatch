import React from "react";
import ImageDefault from '../../assets/Images/imagedefault.png';

import "./Card.css";

const Card = ({Name, Fonction, Link}) => {

  return (
    <div className="Card">

      <img className="Image" src={ImageDefault}/>
      <div className="Name">{Name}</div>
      <div className="Fonction">{Fonction}</div>
      <div className="Link"><a href={Link}>{Link}</a></div>

    </div>
  )
}


export default Card;

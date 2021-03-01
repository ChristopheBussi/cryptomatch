import React from "react";
import ImageDefault from '../../assets/Images/imagedefault.png';
import ImageWalid from '../../assets/Images/WalidAvatar.png';
import ReactIcon from '../../assets/Images/react.png';
import SymfoIcon from '../../assets/Images/symfony-282493.png';


import "./Card.css";

const Card = ({name, fonction, link, image, speciality}) => {

  let Img = ImageDefault;
  let IconSpeciality = null;

  if(name === 'Walid')
    Img = ImageWalid;


  if(speciality === 'React')
    IconSpeciality = ReactIcon;
  if(speciality === 'Symfony')
    IconSpeciality = SymfoIcon;

  return (
    <div className="Card">

      <img className="Image" src={Img}/>
      <div className="Name">{name}</div>
      <div className="Fonction">{fonction}</div>
      <div><img className="Speciality" src={IconSpeciality} /></div>
      <div className="Link"><a href={link}>{link}</a></div>

    </div>
  )
}

export default Card;

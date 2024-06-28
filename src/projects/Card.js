import React from "react";
import './card.css'

function Card({ image, name, description ,link}) {
  const handleClick = () => {
    console.log("Opening link:", link); // Check if link is correct
    window.open(link, "_blank");
  };

  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <center><h3 className="card-name">{name}</h3></center>
        <p className="card-description">{description}</p>
        <center><button className="btncard" onClick={handleClick}>View</button></center>
      </div>
    </div>
  );
}

export default Card;

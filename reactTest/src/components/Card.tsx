import React from "react";
import Button from "./Button";

interface CardProps {
  title: string;
  description: string;
  img: string;
  buttonText: string;
  buttonLink: string;
}

const Card = ({
  title,
  description,
  img,
  buttonText,
  buttonLink,
}: CardProps) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={"Image of " + title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>

        <Button buttonText={buttonText} buttonLink={buttonLink} />
      </div>
    </div>
  );
};

export default Card;

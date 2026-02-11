import React, { useState } from "react";

interface ButtonProps {
  buttonText: string;
  buttonLink: string;
}

const Button = ({ buttonText, buttonLink }: ButtonProps) => {
  return (
    <div>
      <a
        className="btn btn-primary"
        href={buttonLink}
        role="button"
        target="_blank"
        rel="noopener noreferrer"
      >
        {buttonText}
      </a>
    </div>
  );
};

export default Button;

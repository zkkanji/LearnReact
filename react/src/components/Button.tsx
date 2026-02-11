import React, { useState } from "react";

interface ButtonProps {
  names: string[];
}

const Button = ({ names }: ButtonProps) => {
  // 1. Create the State (Starts as "Zain")
  const [name, setName] = useState(names[0]);

  // 2. The Logic to Toggle
  const handleClick = () => {
    if (name === "Zain") {
      setName(names[1]);
    } else {
      setName(names[0]);
    }
  };

  return (
    // 3. The Button with Bootstrap classes
    // onClick connects the click to your function
    <button className="btn btn-primary" onClick={handleClick}>
      {name}
    </button>
  );
};

export default Button;

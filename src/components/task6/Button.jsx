import React from "react";

export const Button = ({ name, action }) => {
  const handleClick = () => {
    action();
  };
  return (
    <button className="button-task6" onClick={handleClick}>
      {name}
    </button>
  );
};

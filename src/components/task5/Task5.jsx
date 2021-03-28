import React, { useEffect, useRef, useState } from "react";
import { Square } from "./Square";
import { ButtonUseEffect } from "./ButtonUseEffect";

export const Task5 = () => {
  const [activeClass, setActiveClass] = useState(true);
  const [square1, setSquare1] = useState(0);
  const [square2, setSquare2] = useState(0);
  const [square3, setSquare3] = useState(0);
  const [square4, setSquare4] = useState(0);

  const buttonClicked = useRef(0);

  useEffect(() => {

    if (buttonClicked.current === 0) {
      buttonClicked.current = 1;
    } else if (buttonClicked.current === 1) {
      console.log(square1);
      setInterval(() => setSquare1((prev) => prev + 1), 1000);
      buttonClicked.current = 2;
    } 
  }, [square1]);


  return (
    <div>
      <section className="square-section">
        <Square isActive={activeClass ? "square active" : "square"}>
          {square1}
        </Square>
        <Square isActive={activeClass ? "square active" : "square"}>
          {square2}
        </Square>
        <Square isActive={activeClass ? "square active" : "square"}>
          {square3}
        </Square>
        <Square isActive={activeClass ? "square active" : "square"}>
          {square4}
        </Square>
      </section>
      <ButtonUseEffect action={() => setSquare1((prev) => prev + 1)} />
    </div>
  );
};

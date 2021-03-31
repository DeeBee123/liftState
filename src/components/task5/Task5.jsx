import React, { useEffect, useState } from "react";
import { Square } from "./Square";
import { ButtonUseEffect } from "./ButtonUseEffect";

export const Task5 = () => {
  const [square1, setSquare1] = useState(0);
  const [square2, setSquare2] = useState(0);
  const [square3, setSquare3] = useState(0);
  const [square4, setSquare4] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isActivesq2, setIsActivesq2] = useState(false);
  const [isActivesq3, setIsActivesq3] = useState(false);
  const [isActivesq4, setIsActivesq4] = useState(false);

  const toggle = () => {
    isActive ? setIsActive(false) : setIsActive(true);
  };

  useEffect(() => {
    let interval = null;
    if (square1 > 9) {
      setIsActive(false);
      setIsActivesq2(true);
    }
    if (isActive) {
      interval = setInterval(() => {
        setSquare1((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive) {
      console.log("isNotActive");
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, square1]);

  useEffect(() => {
    let interval = null;
    if (square2 >= 10) {
      setIsActivesq2(false);
      setIsActivesq3(true);
    }
    if (isActivesq2) {
      interval = setInterval(() => {
        setSquare2((seconds) => seconds + 1);
      }, 500);
    } else if (!isActivesq2) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActivesq2, square2]);

  useEffect(() => {
    let interval = null;
    if (square3 > 9) {
      setIsActivesq3(false);
      setIsActivesq4(true);
    }
    if (isActivesq3) {
      interval = setInterval(() => {
        setSquare3((seconds) => seconds + 1);
      }, 200);
    } else if (!isActivesq3) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActivesq3, square3]);

  useEffect(() => {
    let interval = null;
    if (square4 > 9) {
      setIsActivesq4(false);
    }
    if (isActivesq4) {
      interval = setInterval(() => {
        setSquare4((seconds) => seconds + 1);
      }, 100);
    } else if (!isActivesq4) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActivesq4, square4]);

  return (
    <div>
      <section className="square-section">
        <Square isActive={isActive ? "square active" : "square"}>
          {square1}
        </Square>
        <Square isActive={isActivesq2 ? "square active" : "square"}>
          {square2}
        </Square>
        <Square isActive={isActivesq3 ? "square active" : "square"}>
          {square3}
        </Square>
        <Square isActive={isActivesq4 ? "square active" : "square"}>
          {square4}
        </Square>
      </section>
      <ButtonUseEffect action={toggle} disabled={isActive? true: false}/>
    </div>
  );
};

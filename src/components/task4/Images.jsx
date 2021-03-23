import React from "react";
import ball from "./ball.png"
import "./images.css"
import basket from "./basketNet.png"

export const Ball = (props) => {
    return (
        <img className="ball" style={{left: props.x, bottom: props.y}} src={ball} alt="basketball"></img>
    )
}

export const Basket = () => {
    return (
        <img className="basket" src={basket} alt="basket"></img>
    )
}

export const Score = (props) => {
    return (
        <h2 className="score">Score: {props.score}</h2>
    )
}
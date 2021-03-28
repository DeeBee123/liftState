import React from "react";

export const ButtonUseEffect = ({action}) => {
    const handleClick = () => {
        action();
    }
    return (
        <button onClick={handleClick}>START</button>
    )
}
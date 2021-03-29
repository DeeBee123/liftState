import React from "react";

export const ButtonUseEffect = ({action, disabled}) => {
    const handleClick = () => {
        action();
    }
    return (
        <button onClick={handleClick} disabled={disabled}>START</button>
    )
}
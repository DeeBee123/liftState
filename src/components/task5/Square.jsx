import React from "react";
import "./task5Style.css";

export const Square = ({isActive, children}) => {
    return (
        <div className={isActive}>{children}</div>
    )
}
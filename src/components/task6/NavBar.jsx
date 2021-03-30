import React from "react";
import {Button} from "./Button"


export const NavBar = ({onClickAscending, onClickDescending}) => {
const handleClickAscending= () => {
    onClickAscending();
}
const handleClickDescending= ()=> {
    onClickDescending();
}

    return(<nav className="nav-fixed">
        <Button action={handleClickAscending} name="ascending"/>
        <Button action={handleClickDescending} name="descending"/>
        <Button name="random"/>

    </nav>)
}
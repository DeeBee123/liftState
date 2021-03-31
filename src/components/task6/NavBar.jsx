import React from "react";
import {Button} from "./Button"


export const NavBar = ({onClickAscending, onClickDescending, onClickRandom}) => {
const handleClickAscending= () => {
    onClickAscending();
}
const handleClickDescending= ()=> {
    onClickDescending();
}
const handleClickRandom = ()=> {
    onClickRandom();
}
    return(<nav className="nav-fixed">
        <Button action={handleClickAscending} name="ascending"/>
        <Button action={handleClickDescending} name="descending"/>
        <Button action={handleClickRandom} name="random"/>

    </nav>)
}
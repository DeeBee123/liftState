import {Loading} from "../components/task6/Loading"
import React from "react"

const withCardsLoading = (Component)=> (props)=> 
!props.images.length ? <Loading/> : <Component {...props}/>


export default withCardsLoading


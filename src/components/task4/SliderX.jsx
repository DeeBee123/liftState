import React from "react";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import "./holder.css";


export const SliderX= (props)=> {

  const handleOnChange = (value) => {
    props.action(value);
  };



    return (
      <Slider
        value={props.volume}
        onChange={handleOnChange}
        max={166}
      />
    );
  
}


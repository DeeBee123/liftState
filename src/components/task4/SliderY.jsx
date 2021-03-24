import React from "react";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import "./holder.css";

export const SliderY= (props)=> {

  const handleOnChange = (value) => {
    props.action(value);
  };



    return (
      <Slider
      className="custom"
        value={props.volume}
        orientation="vertical"
        onChange={handleOnChange}
        max={166}
      />
    );
  
}

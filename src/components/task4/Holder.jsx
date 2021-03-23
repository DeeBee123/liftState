import React from "react";
import "./holder.css";

export const Holder = (props) => {
  return <div className={props.class}>{props.children}</div>;
};

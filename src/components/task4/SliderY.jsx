import React, { Component } from "react";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

export default class SliderY extends Component {
  constructor() {
    super();
    this.state = {
      volume: 0,
    };
  }
  handleOnChange = (value) => {
    this.props.action(value);
    this.setState({
      volume: value,
    });
    
  };
  render() {
    return <Slider value={this.state.volume} orientation="vertical" onChange={this.handleOnChange} max={166} />;
  }
}
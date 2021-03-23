import React, { Component } from "react";
import { Holder } from "./Holder";
import SliderY from "./SliderY";
import SliderX from "./SliderX";
import { Ball, Basket, Score } from "./Images";

export class Task4 extends Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      y: 0,
      score: 0,
    };
  }
  handleYChange = (value) => {
    this.setState({ y: value });
  };

  handleXChange= (value) => {
      this.setState({x:value})
  }

  render() {
    return (
      <>
        <Holder class="holder one">
          <Score score={this.state.score} />
          <Ball x={this.state.x} y={this.state.y} />
          <Basket />
        </Holder>
        <Holder class="holder two">
          <SliderY action={this.handleYChange} />
          <SliderX action={this.handleXChange}/>
        </Holder>
      </>
    );
  }
}

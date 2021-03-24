import React, { Component } from "react";
import { Holder } from "./Holder";
import {SliderY} from "./SliderY";
import {SliderX} from "./SliderX";
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

  checkIfScored = () => {
    130 < this.state.x &&
      this.state.x < 147 &&
      this.state.y === 111 &&
      this.setState({ x: 0, y: 0, score: this.state.score + 1});
  };


  handleYChange = (value) => {
    this.setState({ y: value });
    this.checkIfScored();
  };

  handleXChange = (value) => {
    this.setState({ x: value });
    this.checkIfScored();
  };

  render() {
    return (
      <>
        <Holder class="holder one">
          <Score score={this.state.score} />
          <Ball x={this.state.x} y={this.state.y} />
          <Basket />
        </Holder>
        <Holder class="holder two">
          <SliderY volume={this.state.y} action={this.handleYChange} />
          <SliderX volume={this.state.x} action={this.handleXChange} />
        </Holder>
      </>
    );
  }
}

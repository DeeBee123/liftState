import { Component } from "react";
import Dice from "../dice/Dice";
import Button from "../button/Button";

export default class Parent extends Component {
  constructor() {
    super();
    this.state = {
      randomNumber: 0,
    };
  }
  changeNumber = () => {
    let numberOfDots = Math.floor(Math.random() * 6 + 1);
    this.setState({randomNumber: numberOfDots});
  };

  render() {
    return (
      <>
        <Dice value={this.state.randomNumber}></Dice>
        <Button handleClick={this.changeNumber}/>
      </>
    );
  }
}

import { Component } from "react";
import "./button.css";


export default class Button extends Component {
buttonTriggered = () => {
    this.props.handleClick()
}
  render() {
      return (<button className="dice-button" onClick={this.buttonTriggered}>Roll Dice</button>)
  }
}

import { Component } from "react";



export default class Button extends Component {
buttonTriggered = () => {
    this.props.handleClick()
}
  render() {
      return (<button onClick={this.buttonTriggered}>Throw Dice</button>)
  }
}

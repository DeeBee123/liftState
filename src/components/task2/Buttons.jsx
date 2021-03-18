import { Component } from "react";
import "./buttons.css"

export class Buttons extends Component {
  abcButtonTriggered = () => {
  
    this.props.handleAbcClick();
  };
  randomButtonTriggered = () => {
    this.props.handleRandomClick();
  };
  initialButtonTriggered = () => {
    this.props.handleInitialClick();
  };

  render() {
    return (
      <div>
        <button className="array-button" onClick={this.abcButtonTriggered}>
          ABC
        </button>
        <button className="array-button" onClick={this.randomButtonTriggered}>
          Random
        </button>
        <button className="array-button" onClick={this.initialButtonTriggered}>
          Initial
        </button>
      </div>
    );
  }
}

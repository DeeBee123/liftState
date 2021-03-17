import { Component } from "react";
import "./dice.css";
import {
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Default,
} from "./combinations/index";

export default class Dice extends Component {

  render() {
    return (
      <>
        <div className="dice">
          {(() => {
            switch (this.props.value) {
              case 1:
                return <One />;
              case 2:
                return <Two />;
              case 3:
                return <Three />;
              case 4:
                return <Four />;
              case 5:
                return <Five />;
              case 6:
                return <Six />;
              default:
                return <Default />;
            }
          })()}
        </div>
        <span>{this.props.value}</span>
      </>
    );
  }
}

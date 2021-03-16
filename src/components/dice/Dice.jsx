import { Component } from "react";
import "./dice.css";

export default class Dice extends Component {
  // constructor(){
  //     super();
  //     this.state = {

  //     }
  // }
  renderDots = () => {
    //   switch(){
    //   }
  };

  render() {
    return (
      <>
        <div className="dice">
          {(() => {
            switch (this.props.value) {
              case 1:
                return (
                  <>
                    <div className="row">
                      {" "}
                      <div className="dot hidden"></div>
                      <div className="dot hidden"></div>
                      <div className="dot hidden"></div>
                    </div>
                    <div className="row">
                      {" "}
                      <div className="dot hidden"></div>
                      <div className="dot"></div>
                      <div className="dot hidden"></div>
                    </div>
                    <div className="row">
                      {" "}
                      <div className="dot hidden"></div>
                      <div className="dot hidden"></div>
                      <div className="dot hidden"></div>{" "}
                    </div>
                  </>
                );
              case 2:
                return (
                  <>
                    <div className="row">
                      {" "}
                      <div className="dot hidden"></div>
                      <div className="dot hidden"></div>
                      <div className="dot"></div>
                    </div>
                    <div className="row">
                      {" "}
                      <div className="dot hidden"></div>
                      <div className="dot hidden"></div>
                      <div className="dot hidden"></div>
                    </div>
                    <div className="row">
                      {" "}
                      <div className="dot"></div>
                      <div className="dot hidden"></div>
                      <div className="dot hidden"></div>{" "}
                    </div>
                  </>
                );
              case 3:
                return (
                  <>
                    <div className="row">
                      {" "}
                      <div className="dot hidden"></div>
                      <div className="dot hidden"></div>
                      <div className="dot"></div>
                    </div>
                    <div className="row">
                      {" "}
                      <div className="dot hidden"></div>
                      <div className="dot"></div>
                      <div className="dot hidden"></div>
                    </div>
                    <div className="row">
                      {" "}
                      <div className="dot"></div>
                      <div className="dot hidden"></div>
                      <div className="dot hidden"></div>{" "}
                    </div>
                  </>
                );
              case 4:
                return (
                  <>
                    <div className="row">
                      {" "}
                      <div className="dot"></div>
                      <div className="dot hidden"></div>
                      <div className="dot"></div>
                    </div>
                    <div className="row">
                      {" "}
                      <div className="dot hidden"></div>
                      <div className="dot hidden"></div>
                      <div className="dot hidden"></div>
                    </div>
                    <div className="row">
                      {" "}
                      <div className="dot"></div>
                      <div className="dot hidden"></div>
                      <div className="dot"></div>{" "}
                    </div>
                  </>
                );
              case 5:
                return (
                  <>
                    <div className="row">
                      {" "}
                      <div className="dot"></div>
                      <div className="dot hidden"></div>
                      <div className="dot"></div>
                    </div>
                    <div className="row">
                      {" "}
                      <div className="dot hidden"></div>
                      <div className="dot"></div>
                      <div className="dot hidden"></div>
                    </div>
                    <div className="row">
                      {" "}
                      <div className="dot"></div>
                      <div className="dot hidden"></div>
                      <div className="dot"></div>{" "}
                    </div>
                  </>
                );
              case 6:
                return (
                  <>
                    <div className="row">
                      {" "}
                      <div className="dot"></div>
                      <div className="dot hidden"></div>
                      <div className="dot"></div>
                    </div>
                    <div className="row">
                      {" "}
                      <div className="dot "></div>
                      <div className="dot hidden"></div>
                      <div className="dot"></div>
                    </div>
                    <div className="row">
                      {" "}
                      <div className="dot"></div>
                      <div className="dot hidden"></div>
                      <div className="dot"></div>{" "}
                    </div>
                  </>
                );
              default:
                return (
                  <>
                    <div className="row">
                      {" "}
                      <div className="dot"></div>
                      <div className="dot hidden"></div>
                      <div className="dot"></div>
                    </div>
                    <div className="row">
                      {" "}
                      <div className="dot"></div>
                      <div className="dot"></div>
                      <div className="dot"></div>
                    </div>
                    <div className="row">
                      {" "}
                      <div className="dot"></div>
                      <div className="dot hidden"></div>
                      <div className="dot"></div>{" "}
                    </div>
                  </>
                );
            }
          })()}
        </div>
        <span>{this.props.value}</span>
      </>
    );
  }
}

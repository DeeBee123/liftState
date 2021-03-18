import { Component } from "react";
import { Box } from "./Box";
import { Buttons } from "./Buttons";
import { List } from "./List";

export default class Father extends Component {
  constructor() {
    super();
    this.state = {
      sequence: "initial",
    };
  }

  changeSequenceAbc = () => {this.setState({sequence:"abc"})};
  changeSequenceRandom = () => {this.setState({sequence:"random"})};
  changeSequenceInitial = () => {this.setState({sequence:"initial"})};

  render() {
    return (
      <>
        <Box color={"red"} otherProp={"transparent"}>
          <List sequence={this.state.sequence}/>
        </Box>
        <Box color={"green"} >
          <Buttons
            handleAbcClick={this.changeSequenceAbc}
            handleRandomClick={this.changeSequenceRandom}
            handleInitialClick={this.changeSequenceInitial}
          />
        </Box>
      </>
    );
  }
}

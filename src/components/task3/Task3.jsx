import { Component } from "react";
import { Box } from "./Box";
import { Textarea } from "./Textarea";
import { Button } from "./Button";
import { Mirror } from "./Mirror";

export class Task3 extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      color: "black",
      copyText: "",
    };
  }

  textAdded = (input) => {
    this.setState({ text: input, color: "black", copyText: input });
  };

  buttonClicked = () => {
    this.setState({
      text: "",
      color: "red",
    });
  };

  render() {
    return (
      <div>
        <Box height="300px" bottomLRadius="0px" bottomRRadius="0px">
          <Mirror
            color={this.state.color}
            text={
              this.state.text !== "" ? this.state.text : this.state.copyText
            }
          />
        </Box>
        <Box backgroundColor="grey" topLRadius="0px" topRRadius="0px">
          <Textarea action={this.textAdded} value={this.state.text} />
          <Button action={this.buttonClicked} buttonName="Delete" />
        </Box>
      </div>
    );
  }
}

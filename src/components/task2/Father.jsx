import { Component } from "react";
import { Box } from "./Box";
import { List } from "./List";
import { classroom } from "../../shared/data";
import {Button} from "./Button";

export default class Father extends Component {
  constructor() {
    super();
    this.state = {
      array: classroom,
    };
  }

  sortByAbc=() => {
    let copyClassroom = this.state.array;
    copyClassroom.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({array: copyClassroom})
  }

sortByInitial=()=> {
    let copyClassroom = classroom;
   copyClassroom.sort((a,b) => a.id - b.id)
   this.setState({array: copyClassroom})
  }

  sortByRandom=()=> {
    let copyClassroom = classroom;
    for (var i = copyClassroom.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = copyClassroom[i];
      copyClassroom[i] = copyClassroom[j];
      copyClassroom[j] = temp;
    }
    this.setState({array: copyClassroom})
  }


  render() {
    return (
      <>
        <Box color={"red"} otherProp={"transparent"}>
          <List array={this.state.array}/>
        </Box>
        <Box color={"green"} >
          <Button action={this.sortByAbc} text="ABC"/>
          <Button action={this.sortByRandom} text="Random" />
          <Button action={this.sortByInitial} text="Initial"/>
        </Box>
      </>
    );
  }
}

import React, { Component, useState } from "react";
import { Holder } from "./Holder";
import { SliderY } from "./SliderY";
import { SliderX } from "./SliderX";
import { Ball, Basket, Score } from "./Images";

export const Task4 = () => {
  const [values, setValues] = useState({ x: 0, y: 0, score: 0 });

  const checkIfScored = () => {
    130 < values.x &&
      values.x < 147 &&
      values.y === 111 &&
      setValues({ x: 0, y: 0, score: values.score + 1 });
  };

  const handleYChange = (value) => {
    setValues({ ...values, y: value });
    checkIfScored();
  };

  const handleXChange = (value) => {
    setValues({ ...values, x: value });
    checkIfScored();
  };
  return (
    <>
      <Holder class="holder one">
        <Score score={values.score} />
        <Ball x={values.x} y={values.y} />
        <Basket />
      </Holder>
      <Holder class="holder two">
        <SliderY volume={values.y} action={handleYChange} />
        <SliderX volume={values.x} action={handleXChange} />
      </Holder>
    </>
  );
};

// export class Task4 extends Component {
//   constructor() {
//     super();
//     this.state = {
//       x: 0,
//       y: 0,
//       score: 0,
//     };
//   }

//   checkIfScored = () => {
//     130 < this.state.x &&
//       this.state.x < 147 &&
//       this.state.y === 111 &&
//       this.setState({ x: 0, y: 0, score: this.state.score + 1});
//   };

//   handleYChange = (value) => {
//     this.setState({ y: value });
//     this.checkIfScored();
//   };

//   handleXChange = (value) => {
//     this.setState({ x: value });
//     this.checkIfScored();
//   };

//   render() {
//     return (
//       <>
//         <Holder class="holder one">
//           <Score score={this.state.score} />
//           <Ball x={this.state.x} y={this.state.y} />
//           <Basket />
//         </Holder>
//         <Holder class="holder two">
//           <SliderY volume={this.state.y} action={this.handleYChange} />
//           <SliderX volume={this.state.x} action={this.handleXChange} />
//         </Holder>
//       </>
//     );
//   }
// }

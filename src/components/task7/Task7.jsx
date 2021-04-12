import { Input } from "./Input";
import initMarks  from "../../shared/marks";
import { useReducer } from "react";
import { CHANGE_MARK } from "../reducers/constants";
import {markReducer} from "../reducers/markReducer";

export const Task7 = () => {
    const [grades, dispatch]= useReducer(markReducer, initMarks);

  return (
    <>
      {grades.map((mark) => (
          <div style={{marginRight:'12px'}} key={mark.date}>
            <div>{mark.date}</div> <div>{mark.mark}</div>
            <Input action={(value)=>dispatch({type:CHANGE_MARK, change:{date:mark.date, value:value}})}/>
          </div>
        ))}
 
    
    </>
  );
};

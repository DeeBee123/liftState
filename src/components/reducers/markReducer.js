import { CHANGE_MARK } from "./constants";

export const markReducer = (state, action) => {
    console.log(action)
  switch (action.type) {
    case CHANGE_MARK:
      return state.map((mark) => {
        if (mark.date === action.change.date) {
          return {...mark, mark: action.change.value };
        } else {return mark}
      });

    default:
      return state;
  }
};

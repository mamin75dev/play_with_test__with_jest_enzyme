import { CORRECT_GUESS } from "../actions/types";

const reducer = (state = false, action) => {
  switch (action.type) {
    case CORRECT_GUESS:
      return true;
    default:
      return state;
  }
};

export default reducer;

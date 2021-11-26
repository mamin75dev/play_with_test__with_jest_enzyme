import { CORRECT_GUESS } from "../actions/types";
import successReducer from "./successReducer";

describe("Success Reducer", () => {
  test("should return default initial state of false when no action is passed", () => {
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false);
  });
  test("should return state of true when recieving an action of type CORRECT_GUESS", () => {
    const newState = successReducer(undefined, { type: CORRECT_GUESS });
  });
});

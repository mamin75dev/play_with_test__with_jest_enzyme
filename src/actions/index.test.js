import { CORRECT_GUESS, correctGuess } from ".";

describe("correctGuess", () => {
  test("should return an action with type `CORRECT_GUESS`", () => {
    const action = correctGuess();
    expect(action).toEqual({ type: CORRECT_GUESS });
  });
});

import { storeFactory } from "./tests/testUtils";
import { guessWords } from "./actions";

describe("guessWord action dispatcher", () => {
  const secretWord = "party";
  const unsuccessfulGuess = "train";
  const successfulGuess = "party";
  let store;

  describe("no guessed words", () => {
    const initialState = { secretWord };

    beforeEach(() => {
      store = storeFactory(initialState);
    });

    test("should update state correctly for unsuccessfull guess", () => {
      store.dispatch(guessWords(unsuccessfulGuess));

      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          {
            guessedWord: unsuccessfulGuess,
            letterMatchCount: 3,
          },
        ],
      };

      expect(newState).toEqual(expectedState);
    });

    test("should update state correctly for unsuccessfull guess", () => {
      store.dispatch(guessWords(successfulGuess));

      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [
          {
            guessedWord: successfulGuess,
            letterMatchCount: 5,
          },
        ],
      };

      expect(newState).toEqual(expectedState);
    });
  });

  describe("some guessed words", () => {
    const guessedWords = [
      {
        guessedWord: "agile",
        letterMatchCount: 1,
      },
    ];
    const initialState = { secretWord, guessedWords };

    beforeEach(() => {
      store = storeFactory(initialState);
    });

    test("should update state correctly for unsuccessfull guess", () => {
      store.dispatch(guessWords(unsuccessfulGuess));

      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          ...guessedWords,
          {
            guessedWord: unsuccessfulGuess,
            letterMatchCount: 3,
          },
        ],
      };

      expect(newState).toEqual(expectedState);
    });

    test("should update state correctly for successfull guess", () => {
      store.dispatch(guessWords(successfulGuess));

      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [
          ...guessedWords,
          {
            guessedWord: successfulGuess,
            letterMatchCount: 5,
          },
        ],
      };

      expect(newState).toEqual(expectedState);
    });
  });
});

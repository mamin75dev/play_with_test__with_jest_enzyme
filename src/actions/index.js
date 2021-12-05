import { getLetterMatchCount } from "../helpers";
import { CORRECT_GUESS, GUESS_WORD } from "./types";

export const guessWords = (guessedWord) => {
  return (dispatch, getState) => {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
      type: GUESS_WORD,
      payload: { guessedWord, letterMatchCount },
    });

    if (guessedWord === secretWord) {
      dispatch({
        type: CORRECT_GUESS,
      });
    }
  };
};

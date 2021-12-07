import { getLetterMatchCount } from "../helpers";
import { CORRECT_GUESS, GUESS_WORD, SET_SECRET_WORD } from "./types";
import axios from "axios";

const guessWords = (guessedWord) => {
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

const getSecretWord = () => async (dispatch) => {
  const { data } = await axios({
    method: "get",
    url: "http://localhost:3030",
  });
  return dispatch({
    type: SET_SECRET_WORD,
    payload: data,
  });
};

export { guessWords, getSecretWord };

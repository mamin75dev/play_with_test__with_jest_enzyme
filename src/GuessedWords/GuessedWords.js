import React from "react";
import PropTypes from "prop-types";

const GuessedWords = ({ guessedWords }) => {
  let contents;

  if (guessedWords.length === 0) {
    contents = (
      <span data-test="guessed-words-instructions">Try to guess my word!</span>
    );
  } else {
    contents = (
      <div data-test="guessed-words-section">
        <table>
          <thead>
            <tr>
              <th>Guess</th>
              <th>Matching Letter</th>
            </tr>
          </thead>
          <tbody>
            {guessedWords.map((word, index) => (
              <tr data-test="guessed-word" key={index}>
                <td>{word.guguessedWord}</td>
                <td>{word.letterMatchCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return <div data-test="guessed-words-component">{contents}</div>;
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ),
};

export default GuessedWords;

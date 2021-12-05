const getLetterMatchCount = (guessedWord, secretWord) => {
  const secretLetterSet = new Set(secretWord.split(""));
  const guessedLetterSet = new Set(guessedWord.split(""));
  /**
   * we can use this option (Array.from(set)) instead of [...set] to convert a Set to Array ...
   */
  // return Array.from(secretLetterSet).filter((letter) => guessedLetterSet.has(letter))
  //   .length;
  return [...secretLetterSet].filter((letter) => guessedLetterSet.has(letter))
    .length;
};

export { getLetterMatchCount };

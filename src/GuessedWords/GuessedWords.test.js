import React from "react";
import { shallow } from "enzyme";
import {
  checkComponentProps,
  findComponentByTestAttr,
} from "../tests/testUtils";
import GuessedWords from "./GuessedWords";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};

const setup = (props = { ...defaultProps }, state = null) => {
  const wrapper = shallow(<GuessedWords {...props} />);
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
};

describe("GuessedWords component", () => {
  test("does not throw warning with expected props", () => {
    checkComponentProps(GuessedWords, defaultProps);
  });
});

describe("if there are NO words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  test("should renders without errors", () => {
    const component = findComponentByTestAttr(
      wrapper,
      "guessed-words-component"
    );
    expect(component.length).toBe(1);
  });

  test("should render instrunctions to guess a word", () => {
    const instructions = findComponentByTestAttr(
      wrapper,
      "guessed-words-instructions"
    );
    expect(instructions.text().length).not.toBe(0);
  });
});

describe("if there are words guessed", () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: "practice", letterMatchCount: 3 },
    { guessedWord: "incomplete", letterMatchCount: 2 },
    { guessedWord: "party", letterMatchCount: 5 },
  ];
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });

  test("should render component without error", () => {
    const component = findComponentByTestAttr(
      wrapper,
      "guessed-words-component"
    );
    expect(component.length).toBe(1);
  });

  test("should render guessed words section", () => {
    const guessedWordsSection = findComponentByTestAttr(
      wrapper,
      "guessed-words-section"
    );
    expect(guessedWordsSection.length).toBe(1);
  });

  test("should correct number of guessed words", () => {
    const guessedWordNode = findComponentByTestAttr(wrapper, "guessed-word");
    expect(guessedWordNode.length).toBe(guessedWords.length);
  });
});

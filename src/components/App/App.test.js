import { shallow, render, mount } from "enzyme";
import App from "./App";
import { findComponentByTestAttr, storeFactory } from "../../tests/testUtils";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive();
  // if (state) {
  //   wrapper.setState(state);
  // }
  return wrapper;
};

// x for skipping this test
xdescribe("App component", () => {
  test("shoud render app component truthy", () => {
    const wrapper = setup();
    expect(wrapper).toBeTruthy();
  });

  test("shoud render app component", () => {
    const wrapper = setup();
    const appComponent = findComponentByTestAttr(wrapper, "app");
    expect(appComponent.length).toBe(1);
  });

  test("should render increment button", () => {
    const wrapper = setup();
    // const incBtn = wrapper.find(tagHelper("increment")).length;
    const incBtn = findComponentByTestAttr(wrapper, "increment");
    expect(incBtn.length).toBe(1);
  });

  test("should render decrement button", () => {
    const wrapper = setup();
    // const decBtn = wrapper.find(tagHelper("decrement")).length;
    const decBtn = findComponentByTestAttr(wrapper, "decrement");
    expect(decBtn.length).toBe(1);
  });

  test("counter state shoudl start at 0", () => {
    const wrapper = setup();
    const initialCounterState = wrapper.state("counter");
    expect(initialCounterState).toBe(0);
  });

  test("increment button should work", () => {
    const counter = 7;
    const wrapper = setup(null, { counter });

    const incBtn = findComponentByTestAttr(wrapper, "increment");
    incBtn.simulate("click");

    /**
     * test with counter h1 tag text
     */
    // const counterDisplay = findComponentByTestAttr(wrapper, "counter-display");
    // expect(parseInt(counterDisplay.text())).toBe(8);
    // expect(parseInt(counterDisplay.text())).toContain(8);

    /**
     * test with component state
     */
    const counterState = wrapper.state("counter");
    expect(counterState).toBe(8);
  });

  test("decrement button should work", () => {
    const counter = 7;
    const wrapper = setup(null, { counter });

    const decBtn = findComponentByTestAttr(wrapper, "decrement");
    decBtn.simulate("click");

    /**
     * test with counter h1 tag text
     */
    // const counterDisplay = findComponentByTestAttr(wrapper, "counter-display");
    // expect(parseInt(counterDisplay.text())).toBe(6);
    // expect(parseInt(counterDisplay.text())).toContain(6);

    /**
     * test with component state
     */
    const counterState = wrapper.state("counter");
    expect(counterState).toBe(6);
  });
});

describe("App redux props", () => {
  test("should have access to success state", () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toEqual(success);
  });

  test("should have access to secretWord state", () => {
    const secretWord = "party";
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toEqual(secretWord);
  });

  test("should have access to guessedWords state", () => {
    const guessedWords = [{ guessedWord: "train", letterMatchCount: 3 }];
    const wrapper = setup({ guessedWords });
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toEqual(guessedWords);
  });

  test("should have access to getSecretWord action creator", () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});

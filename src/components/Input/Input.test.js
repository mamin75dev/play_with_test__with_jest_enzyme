import { shallow } from "enzyme";
import { findComponentByTestAttr, storeFactory } from "../../tests/testUtils";
import Input from "./Input";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};

/**
 * Render component test
 */
describe("Input component render", () => {
  describe("word has NOT been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });

    test("should render the component without error", () => {
      const component = findComponentByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });

    test("should render the input box", () => {
      const input = findComponentByTestAttr(wrapper, "input-word");
      expect(input.length).toBe(1);
    });

    test("should render the submit button", () => {
      const submitButton = findComponentByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(1);
    });
  });

  describe("word has been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });

    test("should render the component without error", () => {
      const component = findComponentByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });

    test("should not render the input box", () => {
      const input = findComponentByTestAttr(wrapper, "input-word");
      expect(input.length).toBe(0);
    });

    test("should not render the submit button", () => {
      const submitButton = findComponentByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(0);
    });
  });
});

/**
 * Redux test
 */
describe("redux prop", () => {
  test("should have success piece of state as prop", () => {
    /**
     * Testing mapStateToProps
     */
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toEqual(success);
  });

  test("should guessWords action creator return a function", () => {
    const wrapper = setup();
    const guessWordsProp = wrapper.instance().props.guessWords;
    expect(guessWordsProp).toBeInstanceOf(Function);
  });
});

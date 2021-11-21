import { shallow, render, mount } from "enzyme";
import App from "./App";
import { findComponentByTestAttr } from "../../tests/testUtils";

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
};

describe("App component", () => {
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

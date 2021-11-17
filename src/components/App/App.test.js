import { shallow, render, mount } from "enzyme";
import App from "./App";

const tagHelper = (tag) => {
  return `[data-test='${tag}']`;
};

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
};

const findComponentByTestAttr = (wrapper, val) => {
  return wrapper.find(tagHelper(val));
};

const wrapper = setup();

describe("App component", () => {
  test("shoud render app component truthy", () => {
    expect(wrapper).toBeTruthy();
  });

  test("shoud render app component", () => {
    const appComponent = findComponentByTestAttr(wrapper, "app");
    expect(appComponent.length).toBe(1);
  });

  test("should render increment button", () => {
    // const incBtn = wrapper.find(tagHelper("increment")).length;
    const incBtn = findComponentByTestAttr(wrapper, "increment");
    expect(incBtn.length).toBe(1);
  });

  test("should render decrement button", () => {
    // const decBtn = wrapper.find(tagHelper("decrement")).length;
    const decBtn = findComponentByTestAttr(wrapper, "decrement");
    expect(decBtn.length).toBe(1);
  });

  test("counter state shoudl start at 0", () => {
    const initialCounterState = wrapper.state("counter");
    expect(initialCounterState).toBe(0);
  });

  test("increment button should work", () => {
    const counter = 7;
    const app = setup(null, { counter });

    const incBtn = findComponentByTestAttr(app, "increment");
    incBtn.simulate("click");

    /**
     * test with counter h1 tag text
     */
    // const counterDisplay = findComponentByTestAttr(app, "counter-display");
    // expect(parseInt(counterDisplay.text())).toBe(8);
    // expect(parseInt(counterDisplay.text())).toContain(8);

    /**
     * test with component state
     */
    const counterState = app.state("counter");
    expect(counterState).toBe(8);
  });

  test("decrement button should work", () => {
    const counter = 7;
    const app = setup(null, { counter });

    const decBtn = findComponentByTestAttr(app, "decrement");
    decBtn.simulate("click");

    /**
     * test with counter h1 tag text
     */
    // const counterDisplay = findComponentByTestAttr(app, "counter-display");
    // expect(parseInt(counterDisplay.text())).toBe(6);
    // expect(parseInt(counterDisplay.text())).toContain(6);

    /**
     * test with component state
     */
    const counterState = app.state("counter");
    expect(counterState).toBe(6);
  });
});

export { tagHelper, findComponentByTestAttr };

import React from "react";
import Congrats from "./Congrats";
import { shallow } from "enzyme";
import {
  checkComponentProps,
  findComponentByTestAttr,
} from "../../tests/testUtils";

const setup = (props = { success: false }, state = null) => {
  const wrapper = shallow(<Congrats {...props} />);
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
};

describe("Congrats component", () => {
  test("should render compnent without error", () => {
    const wrapper = setup();
    const component = findComponentByTestAttr(wrapper, "congrats-component");
    expect(component.length).toBe(1);
  });

  test("should render empty text when 'success' props is false", () => {
    const wrapper = setup({ success: false });
    const component = findComponentByTestAttr(wrapper, "congrats-message");
    expect(component.text()).toBe("");
  });

  test("should render non-empty text when 'success' props is true", () => {
    const wrapper = setup({ success: true });
    const component = findComponentByTestAttr(wrapper, "congrats-message");
    expect(component.text().length).not.toBe(0);
  });

  test("does not throw warning with expected props", () => {
    checkComponentProps(Congrats, { success: false });
  });
});

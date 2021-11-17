import React from "react";
import Congrats from "./Congrats";
import { shallow } from "enzyme";
import { findComponentByTestAttr } from "../App/App.test";

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<Congrats {...props} />);
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
};

const wrapper = setup();

describe("Congrats component", () => {
  test("should render compnent", () => {
    expect(wrapper).toBeTruthy();
  });
});

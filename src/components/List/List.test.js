import React from "react";
import { shallow } from "enzyme";
import { List } from "./List";

describe("List tests", () => {
  it("renders list items", () => {
    const items = ["one", "two", "three"];
    const wrapper = shallow(<List items={items} />);
    // Expect the wrapper object to be defined
    expect(wrapper.find(".list-items")).toBeDefined();
    expect(wrapper.find(".item")).toHaveLength(items.length);
  });
});

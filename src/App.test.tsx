import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("jest and enzyme tets", () => {
  it("renders app component", () => {
    const component = shallow(<App />);
    expect(component.find("h2").text()).toBe("much hello, such world!!");
  });
});

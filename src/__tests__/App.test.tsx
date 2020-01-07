import React from "react";
import App from "../components/App";
import { shallow } from "enzyme";

describe("jest and enzyme tets", () => {
  it("app component contains input with button component and a button", () => {
    let component = shallow(<App />);
    expect(component.find("InputWithButton")).toHaveLength(1);
  });
});

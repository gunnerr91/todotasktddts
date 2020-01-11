import React from "react";
import App from "../components/App";
import { shallow } from "enzyme";
import { AddTaskAction } from "../actions/TasksAction";

jest.mock("../actions/TasksAction", () => {
  return {
    AddTaskAction: jest.fn()
  };
});

describe("App component", () => {
  let component: any;

  beforeEach(() => {
    component = shallow(<App AddTaskAction={AddTaskAction} />);
  });

  afterEach(() => {
    AddTaskAction.mockClear();
  });

  it("app component contains input with button component and a button", () => {
    expect(component.find("InputWithButton")).toHaveLength(1);
  });

  it("passes add task action to input with two label component", () => {
    component.find("InputWithButton").prop("ButtonOnClickHandler")();
    expect(AddTaskAction).toHaveBeenCalledTimes(1);
  });
});

import { shallow } from "enzyme";
import InputWithButton from "../../components/UserInterface/InputWIthButton";
import React from "react";

describe("Input with button", () => {
  it("contains a text input and a button", () => {
    let component = shallow(
      <InputWithButton
        TextOnChangeHandler={() => {}}
        TextInputValue=""
        ButtonLabel=""
        ButtonOnClickHandler={() => {}}
      />
    );
    expect(component.find("[data-input-text]")).toHaveLength(1);
    expect(component.find("[data-input-submit]")).toHaveLength(1);
  });

  it("input value and on change handler matches value passed by props", () => {
    const expectedValue = "dummyValue";
    const expectedOnChangeHandler = jest.fn(() => {});
    let textInput = shallow(
      <InputWithButton
        TextInputValue={expectedValue}
        TextOnChangeHandler={expectedOnChangeHandler}
        ButtonLabel=""
        ButtonOnClickHandler={() => {}}
      />
    ).find("[data-input-text]");
    expect(textInput.prop("value")).toBe(expectedValue);
    expect(textInput.prop("onChange")).toBe(expectedOnChangeHandler);
  });

  it("button contains label and on click handler", () => {
    const expectedLabel = "dummyLabel";
    const expectedOnClickHandler = jest.fn(() => {});
    let buttonInput = shallow(
      <InputWithButton
        TextInputValue=""
        TextOnChangeHandler={() => {}}
        ButtonLabel={expectedLabel}
        ButtonOnClickHandler={expectedOnClickHandler}
      />
    ).find("[data-input-submit]");
    expect(buttonInput.text()).toBe(expectedLabel);
    expect(buttonInput.prop("onClick")).toBe(expectedOnClickHandler);
  });
});

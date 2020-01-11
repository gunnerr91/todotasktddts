import { shallow, mount } from "enzyme";
import InputWithButton from "../../components/UserInterface/InputWIthButton";
import React from "react";
import { act } from "react-dom/test-utils";

describe("Input with button", () => {
  it("contains a text input and a button", () => {
    let component = shallow(
      <InputWithButton ButtonLabel="" ButtonOnClickHandler={() => {}} />
    );
    expect(component.find("[data-input-text]")).toHaveLength(1);
    expect(component.find("[data-input-submit]")).toHaveLength(1);
  });

  it("input value and on change handler matches value passed by props", () => {
    const expectedOnChangeHandler = jest.fn(() => {});
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation(() => ["", setState]);
    let component = shallow(
      <InputWithButton
        TextInputValue={""}
        TextOnChangeHandler={expectedOnChangeHandler}
        ButtonLabel=""
        ButtonOnClickHandler={() => {}}
      />
    );
    let textInput = component.find("[data-input-text]");
    expect(textInput.prop("value")).toBe("");
    const event = { target: { value: "new value" } };
    textInput.prop("onChange")(event);
    textInput.prop("onChange")(event);
    expect(setState).toHaveBeenCalledTimes(2);
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

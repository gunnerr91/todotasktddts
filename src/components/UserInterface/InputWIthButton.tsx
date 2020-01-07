import React from "react";

export interface InputWithButton {
  TextInputValue?: string;
  TextOnChangeHandler?(event: React.FormEvent<HTMLInputElement>): void;
  ButtonLabel: string;
  ButtonOnClickHandler(event: React.FormEvent<HTMLButtonElement>): void;
}

const InputWithButton: React.FC<InputWithButton> = ({
  TextInputValue,
  TextOnChangeHandler,
  ButtonLabel,
  ButtonOnClickHandler
}) => (
  <div>
    <input
      type="text"
      value={TextInputValue}
      onChange={TextOnChangeHandler}
      data-input-text
    />
    <button onClick={ButtonOnClickHandler} type="button" data-input-submit>
      {ButtonLabel}
    </button>
  </div>
);

export default InputWithButton;

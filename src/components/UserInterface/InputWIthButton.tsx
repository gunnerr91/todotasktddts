import React from "react";

export interface InputWithButton {
  TextInputValue?: string;
  TextOnChangeHandler?(event: React.FormEvent<HTMLInputElement>): void;
  ButtonLabel: string;
  ButtonOnClickHandler(event: React.FormEvent<HTMLButtonElement>): void;
}

const InputWithButton: React.FC<InputWithButton> = ({
  ButtonLabel,
  ButtonOnClickHandler
}) => {
  const [textInputValue, setTextInputValue] = React.useState("");
  return (
    <div>
      <input
        type="text"
        value={textInputValue}
        onChange={event => setTextInputValue(event.target.value)}
        data-input-text
      />
      <button onClick={ButtonOnClickHandler} type="button" data-input-submit>
        {ButtonLabel}
      </button>
    </div>
  );
};

export default InputWithButton;

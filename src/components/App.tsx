import React from "react";
import InputWithButton from "./UserInterface/InputWIthButton";
import { AddTaskAction } from "../actions/TasksAction";

interface AppProps {
  AddTaskAction: Function;
}

const App: React.FC<AppProps> = ({ AddTaskAction }) => {
  return (
    <div className="App">
      <InputWithButton
        ButtonOnClickHandler={() => AddTaskAction()}
        ButtonLabel={"add to list"}
      />
    </div>
  );
};

export default App;

import { AddTaskActionType, ActionTypes } from "./Types";

export const AddTaskAction = (taskName: string): AddTaskActionType => {
  return {
    type: ActionTypes.addTask,
    payload: taskName
  };
};

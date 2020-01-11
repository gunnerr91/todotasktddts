import { Task, AddTaskActionType, ActionTypes } from "../actions/Types";

export default (state: Task[] = [], action: AddTaskActionType) => {
  switch (action.type) {
    case ActionTypes.addTask:
      return [...state, action.payload];

    default:
      return state;
  }
};

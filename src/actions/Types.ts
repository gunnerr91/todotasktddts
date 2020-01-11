export interface Task {
  taskName: string;
}

export enum ActionTypes {
  addTask
}

export interface AddTaskActionType {
  type: ActionTypes.addTask;
  payload: string;
}

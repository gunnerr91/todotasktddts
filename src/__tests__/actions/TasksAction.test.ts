import { AddTaskActionType, ActionTypes } from "../../actions/Types";
import { AddTaskAction } from "../../actions/TasksAction";

describe("Task action", () => {
  it("dispatches action to add task", () => {
    const taskName: string = "some task";
    const expectedAction: AddTaskActionType = {
      type: ActionTypes.addTask,
      payload: taskName
    };
    let result: AddTaskActionType = AddTaskAction(taskName);
    expect(result).toEqual(expectedAction);
  });
});

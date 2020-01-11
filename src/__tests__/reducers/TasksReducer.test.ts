import TaskReducer from "../../reducers/TasksReducer";
import { ActionTypes, Task } from "../../actions/Types";

describe("tasks reducer", () => {
  it("adds new task to the existing list", () => {
    const newTask = "do something";
    const expectedTasks = [newTask];
    const action = {
      payload: newTask,
      type: ActionTypes.addTask
    };
    const state: Task[] = [];
    let result = TaskReducer(state, action);
    expect(result).toEqual(expectedTasks);
  });
});

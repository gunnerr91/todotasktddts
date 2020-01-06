import { rootReducer } from "../../reducers/RootReducer";
import { createStore } from "redux";

describe("root reducer", () => {
  it("returns store object", () => {
    let store = createStore(rootReducer);
    expect(store).not.toBeNull();
  });
});

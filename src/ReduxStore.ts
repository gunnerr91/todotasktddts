import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/RootReducer";

export const reduxStore: Store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

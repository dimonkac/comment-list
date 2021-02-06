import { combineReducers, createStore } from "redux";
import commentReduser from "./comment-reduser";

let reducers = combineReducers({
  commentPages: commentReduser,
});

export const store = createStore(reducers);

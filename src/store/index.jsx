import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../features/TodoSlice";
import UserReducer from "../features/UserSlice";

const store = configureStore({
  reducer: {
    todo: TodoReducer,
    auth: UserReducer,
  },
});
export default store;

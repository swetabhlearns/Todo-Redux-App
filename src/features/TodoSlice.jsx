import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  todos: [],
};
//creatSlice takes 3 arguments, name, initialstate, reducers(functions that change state values)

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Math.random() * 100,
        text: action.payload,
      };
      action.payload.length > 0 && state.todos.push(todo);
      state.count += 1;
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      state.count -= 1;
    },
    editTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.updateText;
      }
    },
  },
});
export const { addTodo, removeTodo, editTodo } = TodoSlice.actions;
export default TodoSlice.reducer;

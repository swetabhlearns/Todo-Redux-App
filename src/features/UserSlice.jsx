import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [{ username: "Mark", password: "1234", name: "Mark Manson" }],
  loggedInUser: null,
};

export const UserSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action) => {
      state.users.push(action.payload);
    },
    login: (state, action) => {
      state.loggedInUser = action.payload;
    },
    logout: (state, action) => {
      state.loggedInUser = null;
    },
  },
});
export const { register, login, logout } = UserSlice.actions;
export default UserSlice.reducer;

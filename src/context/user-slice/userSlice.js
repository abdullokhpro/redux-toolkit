import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

let initialState = {
  value: JSON.parse(localStorage.getItem("users")) || [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,

  reducers: {
    addToUsers(state, action) {
      state.value = [...state.value, action.payload];
      localStorage.setItem("users", JSON.stringify(state.value));
    },
    removeFromUsers(state, action) {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
      localStorage.setItem("users", JSON.stringify(state.value));
    },
  },
});

export const { addToUsers, removeFromUsers } = userSlice.actions;
export default userSlice.reducer;

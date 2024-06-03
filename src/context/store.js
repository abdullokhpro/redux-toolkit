import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user-slice/userSlice";

export default configureStore({
  reducer: {
    user: userSlice,
  },
});

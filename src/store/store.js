import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import jobsReducer from "./jobsSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    jobs: jobsReducer
  }
});
export {
  store
};

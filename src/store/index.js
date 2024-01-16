import { configureStore } from "@reduxjs/toolkit";

import counterSliceReducer from "./counter_slice";
import authSliceReducer from "./auth_slice";


// export const counterActions = counterSlice.actions;
// export const authActions  = authSlice.actions;

const store = configureStore({
  
  reducer: { counter: counterSliceReducer, auth: authSliceReducer},
});
export default store;

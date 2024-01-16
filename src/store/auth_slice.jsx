import { createSlice } from "@reduxjs/toolkit";

// auth state
const initialAuthState = {
  isAuthenticated: false,
};
const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
export const authActions = authSlice.actions
console.log("authActions in auth_slice is ",authActions);
export default authSlice.reducer;

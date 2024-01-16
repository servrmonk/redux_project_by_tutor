import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux"; // createslice is powerful than createreducer

const initialCounterState = {
  counter: 0,
  showCounter: true,
  isAuthenticated: false,
};

const counterSlice = createSlice({
  name: "counterHai",
  initialState: initialCounterState,
  reducers: {
    //obj all reducer
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrease(state, action) {
      state.counter = state.counter - action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
//for many reducer we can use combine reducer or configureStore like create store but it makes merging multiple reducer  into one reducer  easier there after and pass the object reducer not reducers

// for auth

// auth state
const initialAuthState = {
  isAuthenticated: false,
};
const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducer: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const counterActions = counterSlice.actions;
export const authActions  = authSlice.actions;

const store = configureStore({
  // reducer: counterSlice.reducer, for multiple reducer
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
export default store;

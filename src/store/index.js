import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux"; // createslice is powerful than createreducer

const initialState = { counter: 0, showCounter: true };

const counterSlice  = createSlice({
  name: "counterHai",
  initialState: initialState, 
  reducers: {
    //obj all reducer
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state,action) {
      state.counter = state.counter + action.payload;
    },
    decrease(state,action) {
      state.counter = state.counter - action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter
    },
  },
});
//for many reducer we can use combine reducer or configureStore like create store but it makes merging multiple reducer  into one reducer  easier there after and pass the object reducer not reducers

export const counterActions =  counterSlice.actions;

const store = configureStore({
  reducer:counterSlice.reducer
});
export default store;

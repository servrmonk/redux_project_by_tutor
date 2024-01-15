import { createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux"; // createslice is powerful than createreducer

const initialState = { counter: 0, showCounter: true };

createSlice({
  //want an obj as an argument ,we r  preparing slice of global state  and we have different pieces of state ex auth status , every slice need a name u can pass any nai
  name: "counterHai",
  initialState: initialState, //and then reducer
  reducers: {
    //obj all reducer
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state,action) {
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter,
    },
  },
});

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      // state.counter++
      return {
        counter: state.counter + 1, //state.counter ++ why ? u should never mutate the exisiting state u should never change the exisiting state instead always  override it by returning a brand new obj and because obj and array r reference  value injs  it's easy to accidently override and check it  existing state . now the more complex our project become more complex it can get to redux correctly
        showCounter: state.showCounter,
      };
    case "decrement":
      return {
        counter: state.counter - 1,
        showCounter: state.showCounter,
      };
    case "increase":
      return {
        counter: state.counter + action.amount,
        showCounter: state.showCounter,
      };
    case "decrease":
      return {
        counter: state.counter - action.amount,
        showCounter: state.showCounter,
      };
    case "toggle":
      return {
        showCounter: !state.showCounter,
        counter: state.counter,
      };

    default:
      return state;
  }
};

const store = createStore(counterReducer);
export default store;

import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "increment":
      return {
        counter: state.counter + 1,
      };
    case "decrement":
      return {
        counter: state.counter - 1,
      };
    case "increase":
      return {
        counter: state.counter + action.amount,
      };
    case "decrease":
      return {
        counter: state.counter - action.amount,
      };
    
    

    default:
      return state;
  }
};

const store = createStore(counterReducer);
export default store;

import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

// useSelector or useStore to select the part of the state  in class based we will use connect

const Counter = () => {
  const counter = useSelector((state) => state.counter); //to extract the data from the store.when u use useSelector react redux will automaticallyset up the subscription to redux store for this component
  const toggleCounterHandler = () => {};
  const dispatch = useDispatch();

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={() => dispatch({type:"increment"})}>IncrementBy5</button>
      <button onClick={() => dispatch({type:"decrement"})}>DecrementBy5</button>
    </main>
  );
};

export default Counter;

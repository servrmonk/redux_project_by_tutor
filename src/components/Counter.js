import { useSelector } from "react-redux";
import classes from "./Counter.module.css";

// useSelector or useStore to select the part of the state  in class based we will use connect

const Counter = () => {
  const counter = useSelector((state) => state.counter); //to extract the data from the store.when u use useSelector react redux will automaticallyset up the subscription to redux store for this component
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      
    </main>
  );
};

export default Counter;

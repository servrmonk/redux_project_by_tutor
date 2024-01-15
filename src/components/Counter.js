import {  useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({type:'increment'})
  };
  const decrementHandler = () => {
    dispatch({type:'decrement'})
  };
const increaseHandler = ()=>{
  dispatch({type:'increase',amount:5})

}
const decreaseHandler = ()=>{
  dispatch({type:'increase',amount:5})

}

  const counter = useSelector((state) => state.counter);
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
        <button onClick={increaseHandler}>Increment</button>
        <button onClick={decreaseHandler}>Decrement</button>
      </div>
      <br />
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

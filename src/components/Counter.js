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
      <br />
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};


// in function component we use hook useDispatch and useSelector hook but hooks r not usable in class based component react redux also export a function connect u connect class based component  to redux actually u can also use this in function



// export default connect(mapStateToProps,mapDispatchToProps)(Counter);
export default Counter;

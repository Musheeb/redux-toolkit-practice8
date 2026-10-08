import { useSelector, useDispatch } from "react-redux";

import { incrementByOne, decrementByOne } from "./counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Current Counter : {count}</h1>
      <button onClick={() => dispatch(incrementByOne())}>+</button>
      <button onClick={() => dispatch(decrementByOne())}>-</button>
    </div>
  );
}

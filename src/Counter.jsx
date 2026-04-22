import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    // setCount(count + 1); add 1, even if copy f(x)
    // takes pnding state to calc next state
    // call all f(x) in order, updater puts them in queue
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div className="counter-container">
      <p className="count-display">{count}</p>
      <button className="counter-btn" onClick={decrement}>
        Decrement
      </button>
      <button className="counter-btn" onClick={reset}>
        Reset
      </button>
      <button className="counter-btn" onClick={increment}>
        Increment+3
      </button>
    </div>
  );
}

export default Counter;

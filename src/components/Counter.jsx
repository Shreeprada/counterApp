import React, { useState } from "react";
const Counter = () => {
  let [count, setCount] = useState(0);
  const Inccount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Counter App</h1>
      <h1 style={count % 2 == 1 ? { color: "red" } : { color: "green" }}>
        Counter: {count}
      </h1>
      <button onClick={Inccount}>Increment</button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setCount(count * 2);
        }}
      >
        Double
      </button>
    </div>
  );
};

export default Counter;

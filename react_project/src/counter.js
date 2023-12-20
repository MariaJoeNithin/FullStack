import React, { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  function countplus(val, cnt) {
    val = val + cnt;
    if (val <= 0) {
      val = 0;
    }
    setCount(val);
  }
  return (
    <>
      <br />
      <button onClick={() => countplus(count, +1)}>+</button>
      <h1>Count: {count}</h1>
      <button onClick={() => countplus(count, -1)}>-</button>
    </>
  );
}

import React, { useEffect, useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  function countplus(val, cnt) {
    val = val + cnt;
    setCount(val);
  }
  useEffect(() => {
    const color = countColor(count);
    document.querySelector(".counter").style.color = color;
  }, [count]);

  function countColor(val) {
    if (val < 0) {
      return "red";
    } else if (val > 0) {
      return "green";
    }
    return "black";
  }

  return (
    <>
      <br />
      <div
        className="counter d-flex justify-content-center align-items-center"
        style={{ color: countColor(), minHeight: "90vh" }}
      >
        <button
          className="btn btn-primary mx-2"
          onClick={() => countplus(count, +1)}
          style={{ height: "50px" }}
        >
          +
        </button>
        <h1>Count: {count}</h1>
        <button
          className="btn btn-primary mx-2"
          onClick={() => countplus(count, -1)}
          style={{ height: "50px" }}
        >
          -
        </button>
        <button
          className="btn btn-primary mx-2"
          style={{ height: "50px" }}
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </>
  );
}

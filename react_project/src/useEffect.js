import { useState, useEffect } from "react";

export default function Counting() {
  const [count, setCount] = useState(1);

  useEffect(() => console.log("Screen Rendered "));

  //   setTimeout(() => {
  //     setCount((preState) => {
  //       return preState + 1;
  //     });
  //   }, 1000);

  function Update() {
    setCount((preState) => {
      return preState + 1;
    });
  }

  return (
    <>
      <h1>Hello {count}</h1>
      <button onClick={Update}>Click to Add</button>
    </>
  );
}

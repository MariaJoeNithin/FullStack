import { useState, useEffect } from "react";

export default function ColorChanger() {
  const [color, setColor] = useState("#000");

  useEffect(() => {
    let bodyComputedStyle = getComputedStyle(
      document.querySelector("#container")
    ).backgroundColor;
    console.log(bodyComputedStyle);
  });

  //   setTimeout(() => {
  //     setColor(() => {
  //       return Math.floor(Math.random() * 16777215).toString(16);
  //     });
  //   }, 1000);

  function updateColor() {
    setColor(() => Math.floor(Math.random() * 16777215).toString(16));
  }

  return (
    <>
      <div
        id="container"
        style={{
          backgroundColor: `#${color}`,
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={updateColor}>Click to Update</button>
      </div>
    </>
  );
}

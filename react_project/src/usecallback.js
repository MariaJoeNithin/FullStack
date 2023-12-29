import React, { useState, useCallback } from "react";

const ButtonComponent = ({ onClick, label }) => {
  console.log(`Rendering ${label}`);
  return <button onClick={onClick}>{label}</button>;
};

const Callback = () => {
  const [count, setCount] = useState(0);

  //   Without useCallback : a new function is created on every render
  //   const handleClick = () => setCount(count + 1);
  const handleClick = useCallback(() => setCount(count + 1), [count]);
  return (
    <div>
      <p>Count : {count}</p>
      <ButtonComponent onClick={handleClick} label="Increment" />
    </div>
  );
};

export default Callback;

import React, { useState } from "react";

const useToggle = (initialState = false) => {
  const [value, setValue] = useState(initialState);

  const toggle = () => {
    setValue((prevValue) => !prevValue);
  };

  return [value, toggle];
};

const ToggleComponent = () => {
  const [isToggled, toggle] = useToggle(false);
  return (
    <div>
      <p>Toggle state:{isToggled ? "ON" : "OFF"}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};

export default ToggleComponent;

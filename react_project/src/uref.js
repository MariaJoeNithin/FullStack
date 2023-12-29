import React, { useRef, useEffect } from "react";

export default function AutoFocusInput() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <div>
        <label htmlFor="username">UserName</label> <br />
        <input type="text" id="username" ref={inputRef}></input>
      </div>
    </>
  );
}

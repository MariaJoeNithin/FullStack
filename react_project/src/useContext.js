import React, { useState, createContext, useContext } from "react";

const userContext = createContext();

export default function Component1() {
  const [user, setUser] = useState("OFSD23C");
  return (
    <userContext.Provider value={user}>
      <h1>Hello {user}!</h1>
      <Component2 />
    </userContext.Provider>
  );
}

function Component2() {
  const user = useContext(userContext);

  return (
    <>
      <p>{`Batch Name : ${user}`}</p>
    </>
  );
}

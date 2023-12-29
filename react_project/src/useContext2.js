import React, { useContext, createContext, useState } from "react";

const Usercontext = createContext();

export default function Component1() {
  const [user, setUser] = useState("OFSD23C");

  // const updateUserName =(newName) => {
  //     setUserName(newName)
  // }
  return (
    <>
      <Usercontext.Provider value={user}>
        <h1>{`Hello ${user} !`}</h1>
        <Component2 />
      </Usercontext.Provider>
    </>
  );
}

function Component2() {
  return (
    <>
      <p>Mode:Offline</p>
      <Component3 />
    </>
  );
}

function Component3() {
  const user = useContext(Usercontext);
  return (
    <>
      <p>{`batch Name:${user}`}</p>

      {/* <Component4/> */}
    </>
  );
}

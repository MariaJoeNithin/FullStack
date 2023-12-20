import React, { useState } from "react";

export default function Pro() {
  //   let name = "hp";
  let [name, setName] = useState("hp");
  return (
    <>
      <h1>Product Name : {name}</h1>
      <button onClick={() => setName("dell")}>update</button>
    </>
  );
}

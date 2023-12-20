import React, { useState } from "react";
export default function Pronew() {
  let [data, setName] = useState({ name: "hp", id: 111, price: 3000 });
  return (
    <>
      <h1>Product Name : {data.name}</h1>
      <h1>Product Name : {data.id}</h1>
      <h1>Product Name : {data.price}</h1>
      <button onClick={() => setName({ name: "dell", id: 121, price: 3211 })}>
        update
      </button>
    </>
  );
}



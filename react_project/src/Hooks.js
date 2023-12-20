import React, { useState } from "react";

function NewTab() {
  let [newdata, setData] = useState({ name: "hp", id: 111, price: 3000 });
  const updateData = (data) => {
    setData({ ...data, name: "dell" });
  };
//   const updateData => {
//     setData({ name: "dell", id: 123, price: 150 });
//   };
  return (
    <>
      <table>
        <tr>
          <td>P-Name</td>
          <td>{newdata.name}</td>
        </tr>
        <tr>
          <td>P-Id</td>
          <td>{newdata.id}</td>
        </tr>
        <tr>
          <td>P-Price</td>
          <td>{newdata.price}</td>
        </tr>
      </table>

      {/* <button onClick={updateData}>update</button> */}
        <button onClick={() => updateData(newdata)}>update</button>
    </>
  );
}

export default NewTab;

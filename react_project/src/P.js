import React from "react";

function Prd(props) {
  return (
    <>
      <table>
        <tr>
          <td>P-Name</td>
          <td>{props.mode.name}</td>
        </tr>
        <tr>
          <td>P-Id</td>
          <td>{props.mode.id}</td>
        </tr>
        <tr>
          <td>P-Price</td>
          <td>{props.mode.price}</td>
        </tr>
      </table>
    </>
  );
}

export default Prd;
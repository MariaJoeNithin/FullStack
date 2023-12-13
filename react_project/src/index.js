import React from "react";
import ReactDOM from "react-dom/client";

import Ben from "./A";
import Batches from "./B";
import Prd from "./P";

function Batch() {
  return (
    <>
      <h1>This is new React</h1>
      <p>Hello</p>
      <Bat />
    </>
  );
}

function Bat(props) {
  return (
    <>
      <h1>This is Bat {props.mode}</h1>
      <p>Hello</p>
    </>
  );
}

// inline css
// normal css
// module css
// send as props

let data = "Welldone";

let pdInfo = { name: "car", id: 111, price: 1000 };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Bat mode={data} />
    <Batch />
    <Batches />
    <Ben />
    <Prd mode={pdInfo} />
  </>
);

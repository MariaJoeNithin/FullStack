import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Newform from "./formsample";

fetch("https://fakestoreapi.com/products/")
  .then((res) => res.json())
  .then((json) => console.log(json));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Newform />
  </>
);

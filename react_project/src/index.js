import React from "react";
import ReactDOM from "react-dom/client";

// import Ben from "./A";
// import Batches from "./B";
// import Prd from "./P";
// import Pro from "./sample";
// import Pronew from "./sample1";
// import NewTab from "./Hooks";
// import Count from "./counter";
// import Counting from "./useEffect";
// import ColorChanger from "./useColor";
// import Component1 from "./useContext";
// import Component1 from "./useContext2";
// import AutoFocusInput from "./uref";
// import App from "./uref2";
// import InputLengthCounter from "./uref3";
import Reduce from "./usereducer";
import Callback from "./usecallback";
import Memo from "./usememo";
import ToggleComponent from "./customHook";

// function Batch() {
//   return (
//     <>
//       <h1>This is new React</h1>
//       <p>Hello</p>
//       <Bat />
//     </>
//   );
// }

// function Bat(props) {
//   return (
//     <>
//       <h1>This is Bat {props.mode}</h1>
//       <p>Hello</p>
//     </>
//   );
// }

// inline css
// normal css
// module css
// send as props

// let data = "Welldone";

// let pdInfo = { name: "car", id: 111, price: 1000 };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <Bat mode={data} /> */}
    {/* <Batch /> */}
    {/* <Batches /> */}
    {/* <Ben /> */}
    {/* <Prd mode={pdInfo} /> */}
    {/* <Pro /> */}
    {/* <Pronew /> */}
    {/* <NewTab /> */}
    {/* <Count/> */}
    {/* <Counting /> */}
    {/* <ColorChanger /> */}
    {/* <Component1 /> */}
    {/* <AutoFocusInput /> */}
    {/* <App /> */}
    {/* <InputLengthCounter /> */}
    <Reduce />
    <Callback />
    <Memo />
    <ToggleComponent />
  </>
);

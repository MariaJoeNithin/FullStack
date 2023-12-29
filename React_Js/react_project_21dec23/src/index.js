import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "bootstrap/dist/css/bootstrap.css";

// import "./index.css";
import Count from "./counter";
import Todo from "./todo";
import BirthdayDetails from "./birthday";
import PortF from "./port";

const App = () => {
  const [currentPage, setCurrentPage] = useState("Count");

  const renderPage = () => {
    switch (currentPage) {
      case "Count":
        return <Count />;
      case "Todo":
        return <Todo />;
      case "BirthdayDetails":
        return <BirthdayDetails />;
      case "PortF":
        return <PortF />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="fixed-bottom">
        <button
          className="btn btn-primary mx-2"
          onClick={() => setCurrentPage("Count")}
        >
          Count
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={() => setCurrentPage("Todo")}
        >
          Todo
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={() => setCurrentPage("BirthdayDetails")}
        >
          BirthdayDetails
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={() => setCurrentPage("PortF")}
        >
          PortF
        </button>
      </div>
      {renderPage()}
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

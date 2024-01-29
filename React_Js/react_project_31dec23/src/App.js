import React from "react";
import CreditCardInput from "./creditcard";
import RandomReview from "./review";
// import CartPage from "./cartCount";
import NewCart from "./cartPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  function Nomatch() {
    return (
      <>
        <h3>404 NOT Found</h3>
      </>
    );
  }
  return (
    <>
      <Router>
        <nav
          className="navbar nav sticky-top navbar-expand-lg bg-primary"
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item btn btn-dark p-2 rounded m-2">
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    RandomReview
                  </Link>
                </li>
                <li className="nav-item btn btn-dark p-2 m-2 rounded">
                  <Link
                    to="/creditcard"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    CreditCardInput
                  </Link>
                </li>
                {/* <li className="nav-item btn btn-dark p-2 m-2 rounded">
                  <Link
                    to="/cartPg"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    CartPage
                  </Link>
                </li> */}
                <li className="nav-item btn btn-dark p-2 m-2 rounded">
                  <Link
                    to="/newcartPg"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    NewCartPage
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<RandomReview />} />
          <Route path="/creditcard" element={<CreditCardInput />} />
          {/* <Route path="/cartPg" element={<CartPage />} /> */}
          <Route path="/newcartPg" element={<NewCart />} />
          <Route path="*" element={<Nomatch />} />
        </Routes>
      </Router>
    </>
  );
}

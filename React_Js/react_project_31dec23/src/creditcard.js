import React from "react";
import { useState } from "react";
import "./creditcard.css";
import imgSrc from "./chip-removebg-preview.png";

const CreditCardInput = () => {
  const [creditCardNumber, setCreditCardNumber] = useState(
    "**** **** **** ****"
  );
  const [creditCardHolder, setCreditCardHolder] = useState("Enter Holder Name");
  const [creditCardExpiry, setCreditCardExpiry] = useState("MM/YY");
  const [creditCardCvv, setCreditCardCvv] = useState("***");
  const [isCvvFocused, setIsCvvFocused] = useState(false);

  const handleInputChange = (event) => {
    const inputValue = event.target.value.replace(/\D/g, "");

    if (/^\d{0,16}$/.test(inputValue)) {
      const formattedValue = inputValue.replace(
        /(\d{4})(\d{0,4})(\d{0,4})(\d{0,4})/,
        "$1 $2 $3 $4"
      );
      setCreditCardNumber(formattedValue);
    } else {
      alert(
        "Please enter a valid numeric credit card number (up to 16 digits)"
      );
    }
  };
  const handleInputHolder = (event) => {
    const inputValue = event.target.value;
    setCreditCardHolder(inputValue);
  };
  const handleInputExpiry = (event) => {
    const inputValue = event.target.value.replace(/\D/g, "");

    if (/^\d{0,4}$/.test(inputValue)) {
      const month = inputValue.slice(0, 2).padStart(2, "0");
      const year = inputValue.slice(2, 4).padStart(2, "0");
      const formattedValue = `${month}/${year}`;
      setCreditCardExpiry(formattedValue);
    } else {
      alert("Please enter a valid expiry year");
    }
  };
  const handleInputCvv = (event) => {
    const inputValue = event.target.value.replace(/\D/g, "");

    if (!/^\d{0,3}$/.test(inputValue)) {
      alert("Enter valid CVV");
    } else {
      const formattedValue = inputValue.replace(/(\d{3})/, "$1");
      setCreditCardCvv(formattedValue);
    }
  };

  const handleCvvFocus = () => {
    setIsCvvFocused(true);
  };

  const handleCvvBlur = () => {
    setIsCvvFocused(false);
  };
  return (
    <div className="pg1Credit">
      <div
        className={`container-fluid d-flex flex-column justify-content-center align-items-center ${
          isCvvFocused ? "cardcnt" : ""
        }`}
        id="content"
      >
        <div
          className="container d-flex p-0 justify-content-center align-items-center"
          id="card"
        >
          <div className="flip-card">
            <div className="container" id="frontside">
              <div className="row card-img">
                <div className="col">
                  <img src={imgSrc} alt="" />
                </div>
              </div>
              <div className="row">
                <div className="col mx-auto" id="acntNo">
                  {creditCardNumber}
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <h3 className="card-label">CARD HOLDER</h3>
                  <p className="card-text" id="card-name">
                    {creditCardHolder}
                  </p>
                </div>
                <div className="col-4">
                  <h3 className="card-label">EXPIRES</h3>
                  <p className="card-text" id="card-expiry">
                    {creditCardExpiry}
                  </p>
                </div>
              </div>
            </div>
            <div className="container" id="backside">
              <div className="row" id="box"></div>
              <div className="row" id="backcontent">
                <div className="col rounded-1" id="secret"></div>
                <div className="col rounded-1" id="cvvNo">
                  {creditCardCvv}
                </div>
              </div>
            </div>
          </div>
        </div>

        <form action="#" className="container-fluid m-0 mt-4" id="form">
          <div className="row">
            <label>Card holder :</label>
            <input
              id="holderName"
              placeholder="Card holder name"
              type="text"
              onChange={handleInputHolder}
              onFocus={handleCvvBlur}
            />
          </div>
          <div className="row mt-3">
            <label>Card number :</label>
            <input
              type="text"
              id="acntInput"
              // value={creditCardNumber}
              onChange={handleInputChange}
              placeholder="XXXX XXXX XXXX XXXX"
              maxLength="16"
              onFocus={handleCvvBlur}
            />
          </div>
          <div className="row row-cols-2 mt-3" id="expcvc">
            <div className="col" id="expireInput">
              <label>Expires :</label>
              <input
                id="expireDate"
                max="1299"
                maxLength="4"
                minLength="4"
                pattern="12/12"
                onChange={handleInputExpiry}
                placeholder="Expiry"
                type="text"
                onFocus={handleCvvBlur}
              />
            </div>
            <div className="col" id="cvvInput">
              <label>CVC :</label>
              <input
                id="cvc"
                max="999"
                maxLength="3"
                min="100"
                minLength="3"
                pattern="111"
                onChange={handleInputCvv}
                placeholder="CVC"
                type="text"
                onFocus={handleCvvFocus}
                onBlur={handleCvvBlur}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreditCardInput;

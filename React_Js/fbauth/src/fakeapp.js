import React, { useState, useEffect } from "react";
import "./fakeapp.css";

const FetchApi = () => {
  let [apiValue, setData] = useState([]);

  let data = () => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    data();
  }, []);

  console.log(apiValue);

  return (
    <>
      <div className="container">
        <h1>Fake Store</h1>
        <div id="pg1" className="row row-cols-1 row-cols-md-5 ">
          {apiValue.map((data) => {
            return (
              <>
                <div
                  className="col card m-2 shadow border border-0"
                  key={data.id}
                >
                  <h3 className="productTitle">{data.title}</h3>
                  <p className="para">{data.description}</p>
                  <h5>${data.price}</h5>
                  <img
                    src={data.image}
                    alt={data.id}
                    height={"100px"}
                    width={"100px"}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FetchApi;

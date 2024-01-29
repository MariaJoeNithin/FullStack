import React, { useState, useEffect } from "react";

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log("error");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container-fluid g-5 p-3">
        {data ? (
          <div className="row row-cols-1 row-cols-md-5 row-cols-sm-3">
            {data.map((item) => (
              <div
                className="col border rounded-3 shadow m-2"
                style={{ maxWidth: "350px", minWidth: "250px" }}
              >
                <img
                  height={"100px"}
                  width={"100px"}
                  src={item.image}
                  alt={item.title}
                />
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default MyComponent;

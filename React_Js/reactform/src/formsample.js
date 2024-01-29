import React, { useState } from "react";

function Newform() {
  //   const [name, setName] = useState("");
  //   const [email, setMail] = useState("");
  //   console.log(`Updated ${name} ${email}`);
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  function handleForm(e) {
    e.preventDefault();
    // console.log("Update", name, " ", email);
    console.log("FormSubmitted");
    console.log("updated ", data);
  }

  return (
    <form onSubmit={handleForm}>
      <label>Enter Your Name</label>
      <input
        type="text"
        onChange={(e) => {
          setData((previous) => {
            return { ...previous, name: e.target.value };
          });
        }}
      />
      <br />
      <label>Enter Your Mail Id</label>
      <input
        type="email"
        onChange={(e) => {
          setData({ ...data, email: e.target.value });
        }}
      />
      <br />
      <button
        onClick={(e) => {
          e.preventDefault();
          console.log("Name : ", setData.name, " email : ", setData.email);
        }}
      >
        Show Updated
      </button>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Newform;

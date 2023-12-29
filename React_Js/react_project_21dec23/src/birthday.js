import React, { useState } from "react";
import "./bday.css";

export default function BirthdayDetails() {
  const [persons, setPersons] = useState([
    {
      id: 1,
      name: "Bertie Yates",
      age: 29,
      img: "https://www.course-api.com/images/people/person-1.jpeg",
    },
    {
      id: 2,
      name: "Hester Hogan",
      age: 32,
      img: "https://www.course-api.com/images/people/person-2.jpeg",
    },
    {
      id: 3,
      name: "Larry Little",
      age: 36,
      img: "https://www.course-api.com/images/people/person-3.jpeg",
    },
    {
      id: 4,
      name: "Sean Walsh",
      age: 34,
      img: "https://www.course-api.com/images/people/person-4.jpeg",
    },
    {
      id: 5,
      name: "Lola Gardner",
      age: 29,
      img: "https://www.course-api.com/images/people/person-5.jpeg",
    },
  ]);

  const clearAll = () => {
    setPersons([]);
  };

  return (
    <div id="bdayCard">
      <div className="container bcard border p-3 shadow rounded-3 d-flex flex-column justify-content-center align-items-center">
        <h2 className="text-center">{persons.length} Birthday Today</h2>
        {persons.map((person) => (
          <div
            id={person.id}
            className="row bdayRow row-cols-sm-2 row-cols-1 w-100 p-2"
          >
            <div className="col-auto">
              <img
                className="rounded-circle"
                src={person.img}
                alt={person.id}
                height={`100px`}
                width={`100px`}
              />
            </div>
            <div className="col">
              <h3>{person.name}</h3>
              <br />
              <p>{person.age} years</p>
            </div>
          </div>
        ))}

        <button className="btn btn-primary w-100" onClick={clearAll}>
          Clear All
        </button>
      </div>
    </div>
  );
}

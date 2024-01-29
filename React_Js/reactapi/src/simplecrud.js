import React, { useState } from "react";

const EmployeeApp = () => {
  const initialData = [
    {
      id: 1,
      name: "Priya",
      position: "Developer",
      department: "Commerce",
    },
    {
      id: 2,
      name: "vishnu",
      position: "Designer",
      department: "creative",
    },
    {
      id: 2,
      name: "ganesan",
      position: "Manager",
      department: "Management",
    },
  ];

  const [employees, setEmployees] = useState(initialData);
  const [newEmployee, setNewEmployee] = useState({
    id: "",
    name: "",
    position: "",
    department: "",
  });
};

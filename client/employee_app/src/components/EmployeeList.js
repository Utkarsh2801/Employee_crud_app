import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import Employee from "./Employee";
import EmployeeContext from "../context/EmployeeContext";

const EmployeeList = (props) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/employee/getall", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.success) {
          setEmployees([...res.data]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <React.Fragment>
      <Navigation />
      <EmployeeContext.Provider value={[employees, setEmployees]}>
        <div className="my_employees">
          <h1>List of All Employees</h1>
          {employees.map((employee) => (
            <Employee
              employee={employee}
              key={employee._id}
              history={props.history}
            />
          ))}
        </div>
      </EmployeeContext.Provider>
    </React.Fragment>
  );
};

export default EmployeeList;

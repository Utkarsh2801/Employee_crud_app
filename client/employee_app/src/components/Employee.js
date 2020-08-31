import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import EmployeeContext from "../context/EmployeeContext";

const Employee = (props) => {
  const [employee, setEmployee] = useContext(EmployeeContext);

  const deleteemployee = (id) => {
    fetch(`http://localhost:3000/employee/delete/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        let newState = employee;
        newState = newState.filter((emp) => {
          return emp._id !== id;
        });

        setEmployee([...newState]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <React.Fragment>
      <div className="employee">
        <div className="details">
          <h3>{props.employee.name}</h3>
          <p className="employee_des">{props.employee.designated}</p>
          <p>{props.employee.email}</p>
        </div>
        <div className="action_buttons">
          <Link to={`/edit/${props.employee._id}`} className="edit">
            <FontAwesomeIcon icon={faPen} />
          </Link>
          <button
            className="delete"
            onClick={() => deleteemployee(props.employee._id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default React.memo(Employee);

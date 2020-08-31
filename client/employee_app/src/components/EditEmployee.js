import React, { useState, useEffect } from "react";
import FormEditInput from "./FormEditInput";
import EditContext from "../context/EditContext";

const EditEmployee = (props) => {
  const [editState, setEditState] = useState({
    name: "",
    email: "",
    designated: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/employee/get/${props.match.params.id}`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.success) {
          setEditState({
            name: res.data.name,
            email: res.data.email,
            designated: res.data.designated,
          });
        }
        setLoading(!loading);
      });
  }, []);

  const onClick = (editState) => {
    fetch(`http://localhost:3000/employee/update/${props.match.params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(editState),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!loading) {
    return (
      <div className="add_form" autoComplete="off">
        <EditContext.Provider value={[editState, setEditState]}>
          <div>
            <FormEditInput
              placeholder={"Name"}
              type={"text"}
              name={"Name"}
              value={editState.name}
            />
            <FormEditInput
              placeholder={"Email"}
              type={"email"}
              name={"Email"}
              value={editState.email}
            />
            <FormEditInput
              placeholder={"Designated"}
              type={"text"}
              name={"Designated"}
              value={editState.designated}
            />
            <input
              type="submit"
              value="Save"
              onClick={() => {
                onClick(editState);
              }}
            />
          </div>
        </EditContext.Provider>
      </div>
    );
  }
  return <div></div>;
};

export default EditEmployee;

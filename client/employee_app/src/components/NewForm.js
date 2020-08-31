import React, { useState } from "react";
import FormSaveInput from "./FormSaveInput";
import Navigation from "./Navigation";
import SaveContext from "../context/SaveContext";

const Newform = (props) => {
  const [saveState, setSaveState] = useState({
    name: "",
    email: "",
    designated: "",
  });

  const saveContact = (saveState) => {
    fetch("http://localhost:3000/employee/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(saveState),
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

  return (
    <React.Fragment>
      <Navigation />
      <SaveContext.Provider value={[saveState, setSaveState]}>
        <div className="add_form">
          <div>
            <FormSaveInput
              placeholder={"Name"}
              type={"text"}
              name={"name"}
              value=""
            />
            <FormSaveInput
              placeholder={"Email"}
              type={"email"}
              name={"email"}
              value=""
            />
            <FormSaveInput
              placeholder={"Designated"}
              type={"text"}
              name={"designated"}
              value=""
            />
            <input
              type="submit"
              value="ADD"
              onClick={() => {
                saveContact(saveState);
              }}
            />
          </div>
        </div>
      </SaveContext.Provider>
    </React.Fragment>
  );
};

export default Newform;

import React, { useContext } from "react";
import SaveContext from "../context/SaveContext";

const FormEditInput = (props) => {
  const [saveState, setSaveState] = useContext(SaveContext);

  const onChange = (e, name) => {
    name = name.toLowerCase();
    setSaveState({
      ...saveState,
      [name]: e.target.value,
    });
  };

  return (
    <React.Fragment>
      <input
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        required
        autocomplete="off"
        onChange={(e) => {
          onChange(e, props.name);
        }}
      />
    </React.Fragment>
  );
};

export default FormEditInput;

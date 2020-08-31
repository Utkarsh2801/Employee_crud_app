import React, { useContext } from "react";
import EditContext from "../context/EditContext";

const FormEditInput = (props) => {
  const [editState, setEditState] = useContext(EditContext);

  const onChange = (e, name) => {
    name = name.toLowerCase();
    setEditState({
      ...editState,
      [name]: e.target.value,
    });
  };

  return (
    <React.Fragment>
      <input
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        defaultValue={props.value}
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

import React from "react";
import classes from "./TextField.module.css";

function TextField({ name, placeholder, onChange }) {
  return (
    <input
      name={name}
      className={classes.input}
      placeholder={placeholder}
      onChange={onChange}
    ></input>
  );
}

export default TextField;

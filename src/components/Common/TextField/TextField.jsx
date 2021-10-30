import React from "react";
import Styles from "./TextField.module.css";

function TextField({ name, placeholder, onChange }) {
  return (
    <input
      name={name}
      className={Styles.input}
      placeholder={placeholder}
      onChange={onChange}
    ></input>
  );
}

export default TextField;

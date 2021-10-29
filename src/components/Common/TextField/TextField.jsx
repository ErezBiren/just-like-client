import React from "react";
import Styles from "./TextField.module.css";

function TextField({ placeholder }) {
  return <input className={Styles.input} placeholder={placeholder}></input>;
}

export default TextField;

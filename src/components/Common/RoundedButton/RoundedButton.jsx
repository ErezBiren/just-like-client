import React from "react";
import styles from "./RoundedButton.module.css"

function RoundedButton(props) {
  return <button className={styles.button}>{props.children}</button>;
}

export default RoundedButton;

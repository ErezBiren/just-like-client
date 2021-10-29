import React from "react";
import styles from "./HorizontalSeparatorWithText.mdule.css";

export default function HorizontalSeparatorWithText({ text }) {
  return <div className={styles.separator}>{text}</div>;
}

import React from "react";
import styles from "./HorizontalSeparatorWithText.module.css";

const HorizontalSeparatorWithText: React.FC<{ text: string }> = ({ text }) => {
  return <div className={styles.separator}>{text}</div>;
};

export default HorizontalSeparatorWithText;

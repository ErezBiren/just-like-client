import React from "react";
import classes from "./HorizontalSeparatorWithText.module.css";

const HorizontalSeparatorWithText: React.FC<{ text: string }> = ({ text }) => {
  return <div className={classes.separator}>{text}</div>;
};

export default HorizontalSeparatorWithText;

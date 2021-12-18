import React from "react";
import classes from "./RoundedButton.module.css";

const RoundedButton = React.memo((props) => {
  return <button className={classes.button}>{props.children}</button>;
});

export default RoundedButton;

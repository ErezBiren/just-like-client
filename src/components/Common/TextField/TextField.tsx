import React from "react";
import classes from "./TextField.module.css";

const TextField = React.forwardRef((props: any, ref: any) => {
  return <input ref={ref} {...props} className={classes.input} />;
});

export default TextField;

import React from "react";
import classes from "./TextField.module.css";
interface TextFieldParams {
  name: string;
  placeholder: string;
  onChange: any;
}

const TextField = React.memo<TextFieldParams>((params) => {
  const { name, placeholder, onChange } = params;

  return (
    <input
      name={name}
      className={classes.input}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
});

export default TextField;

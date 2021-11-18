import classes from "./TextField.module.css";
interface TextFieldParams {
  name: string;
  placeholder: string;
  onChange: any;
}

const TextField = (params: TextFieldParams) => {
  const { name, placeholder, onChange } = params;

  return (
    <input
      name={name}
      className={classes.input}
      placeholder={placeholder}
      onChange={onChange}
    ></input>
  );
};

export default TextField;

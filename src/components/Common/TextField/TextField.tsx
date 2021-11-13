import classes from "./TextField.module.css";
interface ITextFieldProperties {
  name: string;
  placeholder: string;
  onChange: any;
}

function TextField(params: ITextFieldProperties) {
  const { name, placeholder, onChange } = params;

  return (
    <input
      name={name}
      className={classes.input}
      placeholder={placeholder}
      onChange={onChange}
    ></input>
  );
}

export default TextField;

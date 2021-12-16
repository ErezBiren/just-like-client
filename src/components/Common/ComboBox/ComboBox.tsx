import classes from "./ComboBox.module.css";

interface ComboBoxParams {
  placeHolder: string;
  items: any;
  value: any;
  name: string;
  handleChange: any;
}

const ComboBox = (params: ComboBoxParams) => {
  const { placeHolder, items, value, name, handleChange } = params;

  return (
    <select
      className={classes.select}
      value={value}
      name={name}
      onChange={handleChange}
    >
      <option value="" disabled hidden>
        {placeHolder}
      </option>
      {items &&
        items?.map((item: any) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
    </select>
  );
};

export default ComboBox;

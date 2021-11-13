import classes from "./ComboBox.module.css";

interface ComboBoxParams {
  placeHolder: string;
  items: any;
}

function ComboBox(params: ComboBoxParams) {
  const { placeHolder, items } = params;

  return (
    <select className={classes.select}>
      <option value="" disabled selected hidden>
        {placeHolder}
      </option>
      {items &&
        items?.map((item: any) => (
          <option key={item.id} value={item.id}>
            {item}
          </option>
        ))}
    </select>
  );
}

export default ComboBox;

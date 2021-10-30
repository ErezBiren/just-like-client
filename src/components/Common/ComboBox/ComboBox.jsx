import React from "react";
import styles from "./ComboBox.module.css";

function ComboBox({ placeHolder, items }) {
  return (
    <select className={styles.select}>
      <option value="" disabled selected hidden>
        {placeHolder}
      </option>
      {items &&
        items.map((item) => (
          <option key={item.id} value={item.id}>
            {item}
          </option>
        ))}
    </select>
  );
}

export default ComboBox;

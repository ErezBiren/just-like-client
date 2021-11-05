import styles from "./ButtonWithIcon.module.css";

function ButtonWithIcon({ text, Icon, onClick }) {
  return (
    <button className={styles.button} onClick={onclick}>
      <div className={styles.buttonContent}>
        <Icon />

        <div className={styles.textContainer}>{text}</div>
      </div>
    </button>
  );
}

export default ButtonWithIcon;

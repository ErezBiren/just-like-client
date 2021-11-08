import classes from "./ButtonWithIcon.module.css";

function ButtonWithIcon({ text, Icon, onClick }) {
  return (
    <button className={classes.button} onClick={onclick}>
      <div className={classes.buttonContent}>
        <Icon />

        <div className={classes.textContainer}>{text}</div>
      </div>
    </button>
  );
}

export default ButtonWithIcon;

import classes from "./ButtonWithIcon.module.css";

interface ButtonWithIconParams {
  text: string;
  Icon: any;
  onClick: any;
}

const ButtonWithIcon = (params: ButtonWithIconParams) => {
  const { text, Icon, onClick } = params;

  return (
    <button className={classes.button} onClick={onClick}>
      <div className={classes.buttonContent}>
        <Icon />

        <div className={classes.textContainer}>{text}</div>
      </div>
    </button>
  );
}

export default ButtonWithIcon;

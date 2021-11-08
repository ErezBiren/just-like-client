import classes from "./RoundedButton.module.css";

function RoundedButton(props: any) {
  return <button className={classes.button}>{props.children}</button>;
}

export default RoundedButton;

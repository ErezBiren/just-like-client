import styles from "./RoundedButton.module.css";

function RoundedButton(props: any) {
  return <button className={styles.button}>{props.children}</button>;
}

export default RoundedButton;
